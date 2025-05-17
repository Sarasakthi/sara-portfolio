import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import BearImg from "../assets/images/solobeardrop-nobg.svg"; //beardrop-nobg.png";
import BearImgHover from "../assets/images/solobeardrop-nobg-hover.svg"; //beardrop-nobg.png";
import AboutProfile from "../assets/images/sara/saraProfile.svg";

const Hero = () => {
  const canvasRef = useRef(null);

  // Calculate years of experience
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2018;

  // Tech Slider
  const techItems = [
    {
      name: "Azure",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-azure.png`,
    },
    {
      name: "AWS",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-aws.svg`,
    },
    {
      name: "Google Cloud",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-google-cloud.svg`,
    },
    {
      name: "Java",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-java.png`,
    },
    {
      name: ".Net",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-net.png`,
    },
    {
      name: "C#",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-csharp.svg`,
    },
    {
      name: "NodeJs",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-nodejs.jpg`,
    },
    {
      name: "ReactJs",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-react.svg`,
    },
    {
      name: "Power BI",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-powerbi.png`,
    },
    {
      name: "SSRS",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-ssrs.png`,
    },
    {
      name: "Dynamics",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-dynamics.png`,
    },
    {
      name: "Salesforce",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-salesforce.png`,
    },
    {
      name: "SharePoint",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-sharepoint.svg`,
    },
    {
      name: "Office 365",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-office365.png`,
    },
    {
      name: "Docker",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-docker.svg`,
    },
    {
      name: "AI",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-ai.png`,
    },
    {
      name: "IOT",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-iot.png`,
    },
  ];

  const logosRepeated = [...techItems, ...techItems];

  // About Slider
  const aboutItems = [
    {
      name: yearsOfExperience + " Years Industry Experience",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-experience.png`,
    },
    {
      name: "Cloud Ready",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-cloud-ready.png`,
    },
    {
      name: "Tech Driven",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-tech-driven.png`,
    },
    {
      name: "Full Stack Skilled",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-full-stack.png`,
    },
    {
      name: "Problem Solver",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-problem-solver.png`,
    },
    {
      name: "AI & Data Savvy",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-ai.png`,
    },
    {
      name: "Multi Tech Expert",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-multi-tech.png`,
    },
    {
      name: "Fast Learner",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-fast-learner.png`,
    },
    {
      name: "Scalable Solutions",
      url: `${process.env.PUBLIC_URL}/assets/images/about/about-scalable-solutions.png`,
    },
  ];

  const logosRepeatedAbout = [...aboutItems, ...aboutItems];

  // Diable scroll until the page is loaded
  useEffect(() => {
    // Disable scroll
    document.body.classList.add("no-scroll");

    // Re-enable scroll after 4 seconds (or match your animation duration)
    const timeout = setTimeout(() => {
      document.body.classList.remove("no-scroll");
    }, 4500); // Adjust this to match your animation length

    return () => clearTimeout(timeout);
  }, []);

  // Dark mode toggle
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "";
  }, [isDarkMode]);

  // Intersection Observer for header animation
  // This observer will trigger when the #about section is in view
  const aboutRef = useRef(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimateHeader(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0,
        rootMargin: "-35% 0px -65% 0px",
      }
    );

    const current = aboutRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  // Particle animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];

    const init = () => {
      particles = [];
      for (let i = 0; i < 100; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1,
          vy: (Math.random() - 0.5) * 1,
          radius: 2,
        });
      }
    };

    const connect = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 100) {
            ctx.strokeStyle = "rgba(0, 0, 0, 0.1)";
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
        ctx.fill();
      });

      connect();
      requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Canvas resize on window resize
  let resizeTimeout;
  const handleResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }, 200);
  };

  // Disables right-click context menu
  useEffect(() => {
    const handleContextMenu = (e) => {
      const hero = document.querySelector(".hero-section");
      const sections = document.querySelector(".sections");

      if (
        (hero && hero.contains(e.target)) ||
        (sections && sections.contains(e.target))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      {/* Dark mode toggle */}
      <div className="dark-mode-toggle">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="theme-toggle"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <canvas ref={canvasRef} className="connecting-dots" />

        <div className="hero-wrapper">
          <div className="hero-content hero-row">
            <img
              className="hot-air-bear"
              src={BearImg}
              alt="Bear in hot air balloon"
              onMouseOver={(e) => (e.currentTarget.src = BearImgHover)}
              onMouseOut={(e) => (e.currentTarget.src = BearImg)}
            />

            <div className="hero-text-group">
              <div className="hero-text">
                <h1>
                  Hi, I’m{" "}
                  <a href="/sara-portfolio" className="hover-highlight">
                    Sara
                  </a>
                </h1>
                <div className="typewriter">
                  <p>Full Stack Developer | System Analyst</p>
                </div>
              </div>

              <div className="hero-container">
                <h1>Bringing Ideas to Life Through Code & Design</h1>
                <p>
                  Explore my work, skills, and passion for building seamless
                  digital experiences.
                </p>
                <br />
                <a
                  href={`${process.env.PUBLIC_URL}/myresumeSara.pdf`}
                  download="Sara-Sakthikumar-Resume.pdf"
                  className="cta-button"
                >
                  Download My Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="sections" ref={aboutRef}>
        <div className="about-inner">
          <h2 id="about-header" className={animateHeader ? "animate" : ""}>
            About Me
          </h2>
          <div className="about-content">
            <img
              className="about-profile"
              src={AboutProfile}
              alt="saraswathi-sakthikumar"
            />
            <div className="about-text">
              <p>
                I am <span className="bold-only">Saraswathi Sakthikumar</span>,
                a Full Stack Developer and System Analyst from Edmonton with a
                passion for building smarter, more impactful web and software
                solutions.
              </p>
              <p>
                I enjoy working with technologies like .NET, JavaScript, and
                React, and I’m always excited to learn something new.
              </p>
              <p>
                With over {yearsOfExperience} years of experience in web
                development and database management, I love turning complex
                challenges into clean, efficient solutions. I'm a strong
                believer in lifelong learning and the power of tech to make a
                difference. 🏆
              </p>
              <p>
                Outside of work, I enjoy 📖 reading, 🧘 staying active, and 👨‍👧‍👦
                spending time with my kids 🧒.
              </p>
              <div className="about-learnmore">
                <a href="#about" className="about-learnmore-button">
                  <span className="link-icon bold-only">More About Me</span>
                </a>
              </div>
            </div>
          </div>
          <div className="about-slider-container">
            <div className="about-slider-track">
              {logosRepeatedAbout.map((about, index) => (
                <div className="about-slider-item" key={index}>
                  <img src={about.url} alt={about.name} />
                  <span className="about-label">{about.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="sections">
        <div className="skills-inner">
          <h2>Skills</h2>
          <div className="skills-content">
            <img
              className="skills-profile"
              src={AboutProfile}
              alt="saraswathi-sakthikumar"
            />
            <div className="skills-text">
              {/* Content repeated as placeholder */}
              <p>
                Hello! I’m <b>Saraswathi Sakthikumar</b>, a Full Stack Developer
                based in the Edmonton area. I’m passionate about building
                forward-thinking software and web applications that empower
                engineers and drive innovation.
              </p>
              <p>
                With solid experience in Web Development and Database
                Management, I thrive on solving complex problems and learning
                new technologies. I’m a quick learner, a strong team
                collaborator, and deeply believe in the power of technology to
                make a meaningful impact.
              </p>
              <p>
                Driven by a commitment to lifelong learning, I specialize in the
                .NET framework, JavaScript, and React. For me, web development
                is the perfect blend of creativity, logic, and endless
                opportunities to explore something new—and that’s what keeps me
                inspired every day.
              </p>
              <p>
                When I’m not coding, you’ll likely find me reading, staying
                active, or enjoying quality time with my kids. My curiosity and
                passion for continuous improvement fuel my drive to stay at the
                forefront of the ever-evolving tech landscape.
              </p>
            </div>
          </div>
          <div id="tech-slider" className="slider-container">
            <div className="slider-track">
              {logosRepeated.map((tech, index) => (
                <div className="slider-item" key={index}>
                  <img src={tech.url} alt={tech.name} />
                  <span className="tech-label">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="sections">
        <div className="project-inner">
          <h2>Projects</h2>
          <div className="project-content">
            <img
              className="project-profile"
              src={AboutProfile}
              alt="saraswathi-sakthikumar"
            />
            <div className="project-text">
              {/* Same repeated content as placeholder */}
              <p>
                Hello! I’m <b>Saraswathi Sakthikumar</b>, a Full Stack Developer
                based in the Edmonton area. I’m passionate about building
                forward-thinking software and web applications that empower
                engineers and drive innovation.
              </p>
              <p>
                With solid experience in Web Development and Database
                Management, I thrive on solving complex problems and learning
                new technologies. I’m a quick learner, a strong team
                collaborator, and deeply believe in the power of technology to
                make a meaningful impact.
              </p>
              <p>
                Driven by a commitment to lifelong learning, I specialize in the
                .NET framework, JavaScript, and React. For me, web development
                is the perfect blend of creativity, logic, and endless
                opportunities to explore something new—and that’s what keeps me
                inspired every day.
              </p>
              <p>
                When I’m not coding, you’ll likely find me reading, staying
                active, or enjoying quality time with my kids. My curiosity and
                passion for continuous improvement fuel my drive to stay at the
                forefront of the ever-evolving tech landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sections">
        <h2>Contact</h2>
        <p>Feel free to reach out via email or LinkedIn.</p>
      </section>
    </>
  );
};

export default Hero;
