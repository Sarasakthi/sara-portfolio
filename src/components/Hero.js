import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import BearImg from "../assets/images/solobeardrop-nobg.svg"; //beardrop-nobg.png";
import BearImgHover from "../assets/images/solobeardrop-nobg-hover.svg"; //beardrop-nobg.png";
import AboutProfile from "../assets/images/profile/sara-profile.webp";
import IconBullet from "../assets/images/list-icon-blk.svg";
import LogoSara from "../assets/images/logo-sara.svg";

const Hero = () => {
  const canvasRef = useRef(null);

  // Calculate years of experience
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - 2018;

  // Tech Slider
  const techItems = [
    {
      name: "Azure",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-azure.svg`,
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
      name: "Net",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-net.png`,
    },
    {
      name: "CSharp",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-csharp.svg`,
    },
    {
      name: "NodeJs",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-nodejs.svg`,
    },
    {
      name: "ReactJs",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-react.png`,
    },
    {
      name: "JavaScript",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-js.png`,
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
      name: "Active",
      url: `${process.env.PUBLIC_URL}/assets/images/tech/tech-active.png`,
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

  // Icons for the skills section
  const skillsIcons = [
    {
      name: "PowerBI",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-bi.svg`,
    },
    {
      name: "Cloud",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-cloud.svg`,
    },
    {
      name: "ContentMngt",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-content-mngt.svg`,
    },
    {
      name: "CRM",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-crm.svg`,
    },
    {
      name: "EmergingTech",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-emergingtech.svg`,
    },
    {
      name: "ERP",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-erp.svg`,
    },
    {
      name: "Frontend",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-frontend.svg`,
    },
    {
      name: "Backend",
      url: `${process.env.PUBLIC_URL}/assets/images/icons/icon-backend.svg`,
    },
  ];
  const getIconByName = (name) =>
    skillsIcons.find((icon) => icon.name === name);
  const icon = getIconByName("PowerBI");

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
    }, 5500); // Adjust this to match your animation length

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
              alt=""
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
          <h2 id="about-header">About Me</h2>
          <div className="about-content">
            <img className="about-profile" src={AboutProfile} alt="" />
            <div className="about-text">
              <ul className="about-list">
                <li className="about-text-intro">
                  I am <span className="bold-only">Saraswathi Sakthikumar</span>
                  , but you can call me <span className="bold-only">Sara!</span>
                </li>
                <li className="about-text-intro">
                  I’m a{" "}
                  <span className="bold-only">
                    Full Stack Developer and Systems Analyst
                  </span>{" "}
                  based in Edmonton, passionate about building smarter,
                  scalable, and meaningful web and software solutions.
                </li>
                <li className="about-text-intro">
                  I specialize in technologies like{" "}
                  <span className="bold-only">.NET, JavaScript, and React</span>
                  , and I thrive on continuously expanding my skillset to stay
                  ahead in a fast-paced tech landscape.
                </li>
                <li className="about-text-intro">
                  With over{" "}
                  <span className="bold-only">{yearsOfExperience} years</span>{" "}
                  of experience in{" "}
                  <span className="bold-only">
                    Web development and Database Management
                  </span>
                  , I bring a problem-solving mindset to every project -
                  transforming complex requirements into clean, high-performance
                  solutions.
                </li>
                <li className="about-text-intro">
                  I’m a firm believer in lifelong learning and the power of
                  technology to create real impact.
                </li>
                <li className="about-text-intro">
                  When I’m not coding, you’ll find me reading, staying active,
                  or enjoying time with my kids.
                </li>
              </ul>

              <div className="about-learnmore-container">
                <div className="about-learnmore">
                  <a href="#contact" className="about-learnmore-button">
                    <span className="link-icon bold-only">Connect with Me</span>
                  </a>
                </div>
                <div className="about-learnmore">
                  <a href="#contact" className="about-learnmore-button">
                    <span className="link-icon bold-only">Connect with Me</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="about-slider-container">
            <div className="about-slider-track">
              {logosRepeatedAbout.map((about, index) => (
                <div className="about-slider-item" key={index}>
                  <img src={about.url} alt={""} />
                  <span className="about-label">{about.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="sections" ref={aboutRef}>
        <div className="skills-inner">
          <h2 id="skills-header" className={animateHeader ? "animate" : ""}>
            Skills
          </h2>
          <div className="skills-content">
            <div className="skills-text-main">
              {/* General  */}
              <p className="skills-text-main-intro">
                I bring a versatile skill set built on real-world experience
                across a broad spectrum of modern technologies. From backend to
                frontend, from cloud platforms to enterprise systems, my toolkit
                is designed for scalable, secure, and intelligent solutions.
              </p>
            </div>

            <div className="skills-text">
              {/* Skills - Software Programming */}
              <div className="skills-text-box">
                <div className="skills-text-heading">
                  <ul className="skills-text-list">
                    <li className="icon-bullet">
                      <img
                        src={getIconByName("Backend")?.url}
                        alt=""
                        className="icon-left"
                      />
                      <h3>
                        <span className="bold-only">Software Programming</span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="skills-text-container">
                  <div className="skills-description">
                    <p className="skills-description-text">
                      <div className="skills-description-text-intro">
                        Proficient in developing robust and scalable backend
                        systems using{" "}
                        <span className="bold-only">
                          C# (.NET), Java, and Node.js
                        </span>
                        . Skilled in creating{" "}
                        <span className="bold-only">RESTful APIs</span>,
                        integrating microservices, and ensuring secure,
                        high-performance server-side applications. Expert in
                        building responsive, accessible user interfaces with
                        <span className="bold-only"> ReactJS</span> and modern
                        <span className="bold-only"> JavaScript</span>. Focused
                        on delivering high-performance frontend solutions with
                        strong UX/UI principles and seamless API integration.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">C#, .NET : </span>
                        ASP.NET Core, Web APIs, Entity Framework
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Java : </span>
                        Spring Boot, REST APIs, Microservices
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Node.js : </span>
                        RESTful APIs, Express.js, event-driven architecture
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Reactjs : </span>
                        Hooks, Context API, performance optimization
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">JavaScript : </span>
                        Modern ES6+, DOM manipulation, async programming
                      </span>
                    </p>
                  </div>

                  <div className="skills-logos">
                    {techItems
                      .filter((item) =>
                        [
                          "CSharp",
                          "Net",
                          "ReactJs",
                          "NodeJs",
                          "Java",
                          "JavaScript",
                        ].includes(item.name)
                      )
                      .map((item, index) => (
                        <img
                          key={index}
                          src={item.url}
                          alt={""}
                          title={item.name}
                          className="skills-logo-img"
                        />
                      ))}
                  </div>
                </div>
              </div>
              {/* Skills - Cloud */}
              <div className="skills-text-box">
                <div className="skills-text-heading">
                  <ul className="skills-text-list">
                    <li className="icon-bullet">
                      <img
                        src={getIconByName("Cloud")?.url}
                        alt=""
                        className="icon-left"
                      />
                      <h3>
                        <span className="bold-only">Cloud Platforms</span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="skills-text-container">
                  <div className="skills-description">
                    <p className="skills-description-text">
                      <div className="skills-description-text-intro">
                        Hands-on experience with{" "}
                        <span className="bold-only">
                          Microsoft Azure, AWS, and Google Cloud Platform
                        </span>{" "}
                        for deploying, scaling, and monitoring cloud-native
                        solutions. Proficient in{" "}
                        <span className="bold-only">Docker </span> for
                        containerization and cloud service orchestration using
                        CI/CD pipelines.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Microsoft Azure : </span>
                        Deployment, App Services, Azure Functions
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">AWS : </span>
                        EC2, S3, Lambda, IAM, API Gateway
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">
                          Google Cloud Platform :{" "}
                        </span>
                        Compute Engine, Firebase, Cloud Function
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Docker : </span>
                        Containerization for portable and consistent
                        environments
                      </span>
                    </p>
                  </div>

                  <div className="skills-logos">
                    {techItems
                      .filter((item) =>
                        ["Azure", "AWS", "Google Cloud", "Docker"].includes(
                          item.name
                        )
                      )
                      .map((item, index) => (
                        <img
                          key={index}
                          src={item.url}
                          alt={""}
                          title={item.name}
                          className="skills-logo-img"
                        />
                      ))}
                  </div>
                </div>
              </div>
              {/* Skills - ERP */}
              <div className="skills-text-box">
                <div className="skills-text-heading">
                  <ul className="skills-text-list">
                    <li className="icon-bullet">
                      <img
                        src={getIconByName("ERP")?.url}
                        alt=""
                        className="icon-left"
                      />
                      <h3>
                        <span className="bold-only">Enterprise Solutions</span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="skills-text-container">
                  <div className="skills-description">
                    <p className="skills-description-text">
                      <div className="skills-description-text-intro">
                        Experience in integrating and customizing
                        <span className="bold-only">
                          {" "}
                          Microsoft Dynamics 365 ERP{" "}
                        </span>{" "}
                        solutions to automate business functions such as
                        finance, operations, and supply chain, enabling better
                        data-driven decisions across enterprises. Implemented
                        and customized CRM systems such as{" "}
                        <span className="bold-only">Salesforce</span> and{" "}
                        <span className="bold-only">
                          Microsoft Dynamics CRM
                        </span>{" "}
                        to improve customer engagement, automate sales
                        processes, and streamline customer service operations.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">
                          Microsoft Dynamics 365 :{" "}
                        </span>
                        Customizations, Power Platform integration, workflows
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Salesforce : </span>
                        Apex, Lightning Components, CRM customization
                      </span>
                    </p>
                  </div>

                  <div className="skills-logos">
                    {techItems
                      .filter((item) =>
                        ["Dynamics", "Salesforce"].includes(item.name)
                      )
                      .map((item, index) => (
                        <img
                          key={index}
                          src={item.url}
                          alt={""}
                          title={item.name}
                          className="skills-logo-img"
                        />
                      ))}
                  </div>
                </div>
              </div>
              {/* Skills - BI */}
              <div className="skills-text-box">
                <div className="skills-text-heading">
                  <ul className="skills-text-list">
                    <li className="icon-bullet">
                      <img
                        src={getIconByName("PowerBI")?.url}
                        alt=""
                        className="icon-left"
                      />
                      <h3>
                        <span className="bold-only">
                          Business intelligence and analytics
                        </span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="skills-text-container">
                  <div className="skills-description">
                    <p className="skills-description-text">
                      <div className="skills-description-text-intro">
                        Adept at transforming raw data into meaningful insights
                        using{" "}
                        <span className="bold-only">
                          {" "}
                          Power BI, SSRS, and Active Reports.{" "}
                        </span>
                        Experienced in building interactive dashboards,
                        paginated and embedded reports, and automated reporting
                        workflows for real-time decision-making.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Power BI : </span>
                        Data modeling, visualization, and custom dashboards
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">
                          SSRS (SQL Server Reporting Services) :{" "}
                        </span>
                        Pixel-perfect paginated reports, subscriptions, and
                        enterprise-level reporting
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Active Report : </span>
                        Lightweight, embeddable reports for web applications,
                        enabling offline viewing and customizable UI components
                      </span>
                    </p>
                  </div>

                  <div className="skills-logos">
                    {techItems
                      .filter((item) =>
                        ["SSRS", "Active", "Power BI"].includes(item.name)
                      )
                      .map((item, index) => (
                        <img
                          key={index}
                          src={item.url}
                          alt={""}
                          title={item.name}
                          className="skills-logo-img"
                        />
                      ))}
                  </div>
                </div>
              </div>
              {/* Skills - Content Management */}
              <div className="skills-text-box">
                <div className="skills-text-heading">
                  <ul className="skills-text-list">
                    <li className="icon-bullet">
                      <img
                        src={getIconByName("CRM")?.url}
                        alt=""
                        className="icon-left"
                      />
                      <h3>
                        <span className="bold-only">Content Management</span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="skills-text-container">
                  <div className="skills-description">
                    <p className="skills-description-text">
                      <div className="skills-description-text-intro">
                        Experienced with enterprise-level platforms like
                        <span className="bold-only"> SharePoint </span>
                        and
                        <span className="bold-only"> Office 365</span>, enabling
                        seamless collaboration, content organization, and
                        document lifecycle management.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">SharePoint : </span>
                        Custom apps, document management, automation
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">Office 365 : </span>
                        Graph API, Outlook, SharePoint, and Teams integrations
                      </span>
                    </p>
                  </div>

                  <div className="skills-logos">
                    {techItems
                      .filter((item) =>
                        ["Office 365", "SharePoint"].includes(item.name)
                      )
                      .map((item, index) => (
                        <img
                          key={index}
                          src={item.url}
                          alt={""}
                          title={item.name}
                          className="skills-logo-img"
                        />
                      ))}
                  </div>
                </div>
              </div>

              {/* Skills - Emerging Tech */}
              <div className="skills-text-box">
                <div className="skills-text-heading">
                  <ul className="skills-text-list">
                    <li className="icon-bullet">
                      <img
                        src={getIconByName("EmergingTech")?.url}
                        alt=""
                        className="icon-left"
                      />
                      <h3>
                        <span className="bold-only">Emerging Technologies</span>
                      </h3>
                    </li>
                  </ul>
                </div>
                <div className="skills-text-container">
                  <div className="skills-description">
                    <p className="skills-description-text">
                      <div className="skills-description-text-intro">
                        Actively working with cutting-edge technologies
                        including using
                        <span className="bold-only">
                          {" "}
                          Artificial Intelligence (AI){" "}
                        </span>
                        for predictive analytics and
                        <span className="bold-only">
                          {" "}
                          Internet of Things (IoT){" "}
                        </span>
                        for building smart, connected applications that leverage
                        real-time data.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">AI Integration : </span>
                        Natural Language Processing, Image Recognition, and
                        Intelligent Automation
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-only">
                          IoT (Internet of Things) :{" "}
                        </span>
                        Device integration, Telemetry, Azure IoT Hub
                      </span>
                    </p>
                  </div>

                  <div className="skills-logos">
                    {techItems
                      .filter((item) => ["AI", "IOT"].includes(item.name))
                      .map((item, index) => (
                        <img
                          key={index}
                          src={item.url}
                          alt={""}
                          title={item.name}
                          className="skills-logo-img"
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="sections">
        <div className="project-inner">
          <h2>Projects</h2>
          <div className="project-content"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sections">
        <div className="project-inner">
          <h2>Get In Touch</h2>
          <div className="project-content"></div>
        </div>

        <p className="contact-intro">
          Have a project in mind or want to chat? Feel free to reach out using
          the form or contact me directly.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <img src="/icons/email.svg" alt="" className="info-icon" />
              <div>
                <strong>Email</strong>
                <p>sarasakthikumar@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/icons/phone.svg" alt="" className="info-icon" />
              <div>
                <strong>Phone</strong>
                <p>+1 825-823-2463</p>
              </div>
            </div>
            <div className="info-item">
              <img src="/icons/location.svg" alt="" className="info-icon" />
              <div>
                <strong>Location</strong>
                <p>Edmonton, AB, Canada</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "mailto:sarasakthikumar@gmail.com";
              }}
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
