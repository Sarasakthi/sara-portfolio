import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import HotAirBear from "../assets/images/beardrop-nobg.png";
import AboutProfile from "../assets/images/sara/saraProfile.svg";

const Hero = () => {
  const canvasRef = useRef(null);
  const aboutRef = useRef(null);
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Toggle animation class based on intersection
        setAnimateHeader(entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0,
        rootMargin: "-35% 0px -65% 0px", // Trigger when #about crosses center of viewport
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

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <canvas ref={canvasRef} className="connecting-dots" />

        <div className="hero-wrapper">
          <div className="hero-content hero-row">
            <img
              className="hot-air-bear"
              src={HotAirBear}
              alt="Bear in hot air balloon"
            />

            <div className="hero-text-group">
              <div className="hero-text">
                <h1>Hi, I'm Sara</h1>
                <div className="typewriter">
                  <p>Full Stack Developer | Software Engineer</p>
                </div>
              </div>

              <div className="hero-container">
                <h1>Welcome to My Portfolio</h1>
                <p>
                  Building meaningful and impactful solutions with a focus on
                  performance and clean code.
                </p>
                <br />
                <a
                  href={`${process.env.PUBLIC_URL}/myresumeSara.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  View My Resume
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
