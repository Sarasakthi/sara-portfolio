import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import BearImg from "../assets/images/solobeardrop-nobg.svg"; //beardrop-nobg.png";
import BearImgHover from "../assets/images/solobeardrop-nobg-hover.svg"; //beardrop-nobg.png";
import AboutProfile from "../assets/images/profile/sara-profile.webp";
import IconBullet from "../assets/images/list-icon-blk.svg";
import BulletAbout from "../assets/images/bullet-about.svg";
import BulletSkills from "../assets/images/bullet-skills.svg";
import BulletResume from "../assets/images/bullet-resume.svg";
import BulletProjects from "../assets/images/bullet-projects.svg";
import BulletContact from "../assets/images/bullet-contact.svg";
import ProjectVideo3M from "../assets/videos/project-3MOralCarePortal.mp4";
import ProjectVideo3MThumbnail from "../assets/images/project-3MOralCarePortal.svg";
import ProjectLufkin from "../assets/images/project-lufkin.svg";
import ProjectHakuna from "../assets/images/project-hakuna.png";
import ProjectHRMS from "../assets/images/project-HRMS.svg";
import ProjectKnowmycanada from "../assets/images/project-knowmycanada.svg";

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

  const [showResume, setShowResume] = useState(false);

  const handleViewResume = () => {
    setShowResume(true);
  };

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
                  className="cta-button bold-only"
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
          <h2 id="about-header">
            <img src={BulletAbout} alt="" className="bullet-header" />
            About Me
          </h2>
          <div className="about-content">
            <div className="about-learnmore-container">
              <img className="about-profile" src={AboutProfile} alt="" />
              <div className="about-learnmore">
                <div className="about-learnmore-connect">
                  <a href="#contact" className="about-learnmore-button">
                    <span className="link-icon bold-only">Connect with Me</span>
                  </a>
                </div>
                <div className="about-learnmore-resume">
                  <a
                    href={`${process.env.PUBLIC_URL}/myresumeSara.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-learnmore-button"
                  >
                    <span className="link-icon bold-only">View My Resume</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-text">
              <ul className="about-list">
                <li className="about-text-intro">
                  I am{" "}
                  <span className="bold-and-change-color-blue">
                    Saraswathi Sakthikumar
                  </span>
                  , but you can call me{" "}
                  <span className="bold-and-change-color-blue">Sara!</span>
                </li>
                <li className="about-text-intro">
                  I’m a{" "}
                  <span className="bold-and-change-color-blue">
                    Full Stack Developer and Systems Analyst
                  </span>{" "}
                  based in Edmonton, passionate about building smarter,
                  scalable, and meaningful web and software solutions.
                </li>
                <li className="about-text-intro">
                  I specialize in technologies like{" "}
                  <span className="bold-and-change-color-blue">
                    .NET, JavaScript, and React
                  </span>
                  , and I thrive on continuously expanding my skillset to stay
                  ahead in a fast-paced tech landscape.
                </li>
                <li className="about-text-intro">
                  With over{" "}
                  <span className="bold-and-change-color-blue">
                    {yearsOfExperience} years
                  </span>{" "}
                  of experience in{" "}
                  <span className="bold-and-change-color-blue">
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
            <img src={BulletSkills} alt="" className="bullet-header" />
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
                        <span className="bold-and-change-color-blue">
                          C# (.NET), Java, and Node.js
                        </span>
                        . Skilled in creating{" "}
                        <span className="bold-and-change-color-blue">
                          RESTful APIs
                        </span>
                        , integrating microservices, and ensuring secure,
                        high-performance server-side applications. Expert in
                        building responsive, accessible user interfaces with
                        <span className="bold-and-change-color-blue">
                          {" "}
                          ReactJS
                        </span>{" "}
                        and modern
                        <span className="bold-and-change-color-blue">
                          {" "}
                          JavaScript
                        </span>
                        . Focused on delivering high-performance frontend
                        solutions with strong{" "}
                        <span className="bold-and-change-color-blue">
                          UX/UI
                        </span>{" "}
                        principles and seamless API integration.
                      </div>

                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          C#, .NET:{" "}
                        </span>
                        ASP.NET Core, Web APIs, Entity Framework
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Java:{" "}
                        </span>
                        Spring Boot, REST APIs, Microservices
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Node.js:{" "}
                        </span>
                        RESTful APIs, Express.js, event-driven architecture
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Reactjs:{" "}
                        </span>
                        Hooks, Context API, performance optimization
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          JavaScript:{" "}
                        </span>
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
                        <span className="bold-and-change-color-blue">
                          Microsoft Azure, AWS, and Google Cloud Platform
                        </span>{" "}
                        for deploying, scaling, and monitoring cloud-native
                        solutions. Proficient in{" "}
                        <span className="bold-and-change-color-blue">
                          Docker{" "}
                        </span>{" "}
                        for containerization and cloud service orchestration
                        using CI/CD pipelines.
                      </div>

                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Microsoft Azure:{" "}
                        </span>
                        Deployment, App Services, Azure Functions
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          AWS:{" "}
                        </span>
                        EC2, S3, Lambda, IAM, API Gateway
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Google Cloud Platform:{" "}
                        </span>
                        Compute Engine, Firebase, Cloud Function
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Docker:{" "}
                        </span>
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
                        <span className="bold-and-change-color-blue">
                          {" "}
                          Microsoft Dynamics 365 ERP{" "}
                        </span>{" "}
                        solutions to automate business functions such as
                        finance, operations, and supply chain, enabling better
                        data-driven decisions across enterprises. Implemented
                        and customized CRM systems such as{" "}
                        <span className="bold-and-change-color-blue">
                          Salesforce
                        </span>{" "}
                        and{" "}
                        <span className="bold-and-change-color-blue">
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
                        <span className="bold-and-change-color-purple">
                          Microsoft Dynamics 365:{" "}
                        </span>
                        Customizations, Power Platform integration, workflows
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Salesforce:{" "}
                        </span>
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
                        <span className="bold-and-change-color-blue">
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
                        <span className="bold-and-change-color-purple">
                          Power BI:{" "}
                        </span>
                        Data modeling, visualization, and custom dashboards
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          SSRS (SQL Server Reporting Services):{" "}
                        </span>
                        Pixel-perfect paginated reports, subscriptions, and
                        enterprise-level reporting
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Active Report:{" "}
                        </span>
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
                        <span className="bold-and-change-color-blue">
                          {" "}
                          SharePoint{" "}
                        </span>
                        and
                        <span className="bold-and-change-color-blue">
                          {" "}
                          Office365
                        </span>
                        , enabling seamless collaboration, content organization,
                        and document lifecycle management.
                      </div>
                      <span className="skills-description-text-list">
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          SharePoint:{" "}
                        </span>
                        Custom apps, document management, automation
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          Office 365:{" "}
                        </span>
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
                        <span className="bold-and-change-color-blue">
                          {" "}
                          Artificial Intelligence (AI){" "}
                        </span>
                        for predictive analytics and
                        <span className="bold-and-change-color-blue">
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
                        <span className="bold-and-change-color-purple">
                          AI Integration:{" "}
                        </span>
                        Natural Language Processing, Image Recognition, and
                        Intelligent Automation
                        <br className="margin-bottom-ten" />
                        <img
                          src={IconBullet}
                          alt=""
                          className="icon-bullet-left"
                        />
                        <span className="bold-and-change-color-purple">
                          IoT:{" "}
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
          <h2 id="project-header">
            <img src={BulletProjects} alt="" className="bullet-header" />
            Selected works
          </h2>

          <div className="project-content">
            <div className="project-text-main">
              <ul className="project-text-main-intro">
                <li>
                  I take pride in building robust, user-focused applications
                  that solve real-world problems across diverse industries. From
                  enterprise-grade portals for global corporations to creative
                  and engaging side projects, each solution showcases my passion
                  for{" "}
                  <span className="bold-and-change-color-blue">
                    Clean architecture
                  </span>
                  ,{" "}
                  <span className="bold-and-change-color-blue">
                    Efficient coding
                  </span>
                  , and{" "}
                  <span className="bold-and-change-color-blue">
                    Scalable development
                  </span>
                  .
                </li>
                <li>
                  As a{" "}
                  <span className="bold-and-change-color-blue">
                    Full Stack Developer
                  </span>{" "}
                  and{" "}
                  <span className="bold-and-change-color-blue">
                    Systems Analyst
                  </span>
                  , I have led and contributed to a variety of impactful
                  projects in sectors such as{" "}
                  <span className="bold-and-change-color-blue">Healthcare</span>
                  ,{" "}
                  <span className="bold-and-change-color-blue">
                    Manufacturing, HR
                  </span>
                  , and{" "}
                  <span className="bold-and-change-color-blue">Banking</span> -
                  delivering{" "}
                  <span className="bold-and-change-color-blue">Secure</span>,{" "}
                  <span className="bold-and-change-color-blue">Scalable</span>,
                  and{" "}
                  <span className="bold-and-change-color-blue">
                    User-friendly{" "}
                  </span>
                  systems tailored to both business and user needs.
                </li>
                <li className="remove-margin">
                  Whether you’re a{" "}
                  <span className="bold-and-change-color-blue">recruiter</span>{" "}
                  assessing technical capabilities or a{" "}
                  <span className="bold-and-change-color-blue">client</span>{" "}
                  looking for dependable, forward-thinking solutions, the
                  following project highlights demonstrate my ability to deliver{" "}
                  <span className="bold-and-change-color-blue">Robust</span>{" "}
                  <span className="bold-and-change-color-blue">
                    and Data-driven applications
                  </span>{" "}
                  that align with business goals and create meaningful digital
                  experiences.
                </li>
              </ul>
            </div>

            <div className="project-text">
              <div className="project-text-group">
                {/* Project - 3M Oral Care */}
                <div className="project-text-box">
                  <div className="project-text-heading">
                    <h3>
                      <span className="bold-and-change-color-red">
                        Oral Care Portal - 3M
                      </span>
                    </h3>
                    <p className="project-text-subhead">
                      Enterprise Web Solution for Healthcare Management
                    </p>
                  </div>
                  <div className="project-text-container">
                    <div className="project-description">
                      <div className="project-description-video-image">
                        <video
                          width="100%"
                          height="auto"
                          controls
                          className="project-video"
                          src={ProjectVideo3M}
                          poster={ProjectVideo3MThumbnail}
                        >
                          Your browser does not support the video tag.
                        </video>
                      </div>
                      <p className="project-description-text">
                        <div className="project-description-text">
                          <div className="project-description-text-intro">
                            Developed a secure, scalable internal portal for
                            3M’s Oral Care division, enabling seamless data
                            access for sales, clinical, and administrative
                            teams. Integrated data analytics, user role
                            management, and document handling.
                          </div>
                          <span className="bold-and-change-color-green margin-top-ten display-flex">
                            Tech Stack:{" "}
                          </span>
                          <img
                            src={IconBullet}
                            alt=""
                            className="icon-bullet-left"
                          />
                          .NET, React, SQL Server, Azure, HTML, CSS, Bootstrap,
                          React, Spring, MySQL
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project - Lufkin Management System */}
                <div className="project-text-box">
                  <div className="project-text-heading">
                    <h3>
                      <span className="bold-and-change-color-red">
                        Management System - LUFKIN
                      </span>
                    </h3>
                    <p className="project-text-subhead">
                      Asset and Operations Tracking System for Oilfield Services
                    </p>
                  </div>
                  <div className="project-text-container">
                    <div className="project-description">
                      <div className="project-description-video-image">
                        <a
                          href="https://www.lufkin.com/solutions-services/srod/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={ProjectLufkin} alt="" />
                        </a>
                      </div>
                      <p className="project-description-text">
                        <div className="project-description-text">
                          <div className="project-description-text-intro">
                            Built a complete management solution for industrial
                            operations, streamlining asset tracking, maintenance
                            logs, reporting, and user management across LUFKIN
                            facilities.
                          </div>
                          <span className="bold-and-change-color-green margin-top-ten display-flex">
                            Tech Stack:{" "}
                          </span>
                          <img
                            src={IconBullet}
                            alt=""
                            className="icon-bullet-left"
                          />
                          ASP.NET Core, HTML, CSS, JavaScript, C#, Microsoft SQL
                          Server
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project - Hakuna Matada Bank */}
                <div className="project-text-box">
                  <div className="project-text-heading">
                    <h3>
                      <span className="bold-and-change-color-red">
                        Hakuna Matada Bank
                      </span>
                    </h3>
                    <p className="project-text-subhead">
                      Modern Banking App UI (Inspired by Kotak Mahindra Bank)
                    </p>
                  </div>
                  <div className="project-text-container">
                    <div className="project-description">
                      <div className="project-description-video-image">
                        <a
                          href="https://github.com/Sarasakthi/Hakuna-Matata-Bank"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={ProjectHakuna} alt="" />
                        </a>
                      </div>
                      <p className="project-description-text">
                        <div className="project-description-text">
                          <div className="project-description-text-intro">
                            A React-based replica of a modern banking dashboard
                            focusing on user interface and interaction. Includes
                            account summaries, transaction history, fund
                            transfers, and responsive design.
                          </div>
                          <span className="bold-and-change-color-green margin-top-ten display-flex">
                            Tech Stack:{" "}
                          </span>
                          <img
                            src={IconBullet}
                            alt=""
                            className="icon-bullet-left"
                          />
                          React, Tailwind CSS, JavaScript, Firebase
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project - HR Management System */}
                <div className="project-text-box">
                  <div className="project-text-heading">
                    <h3>
                      <span className="bold-and-change-color-red">
                        HR Management System
                      </span>
                    </h3>
                    <p className="project-text-subhead">
                      Comprehensive Human Resources Platform
                    </p>
                  </div>
                  <div className="project-text-container">
                    <div className="project-description">
                      <div className="project-description-video-image">
                        <a
                          href="https://github.com/Sarasakthi/HumanResourceMngtSystem"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={ProjectHRMS} alt="" />
                        </a>
                      </div>
                      <p className="project-description-text">
                        <div className="project-description-text">
                          <div className="project-description-text-intro">
                            A passion project designed and developed an
                            end-to-end HR solution to manage employee
                            onboarding, performance tracking, leave management,
                            and payroll insights. Created to explore full-stack
                            features with a hands-on approach.
                          </div>
                          <span className="bold-and-change-color-green margin-top-ten display-flex">
                            Tech Stack:{" "}
                          </span>
                          <img
                            src={IconBullet}
                            alt=""
                            className="icon-bullet-left"
                          />
                          React, Node.js, Express, MySQL
                        </div>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Project - KnowMyCanada */}
                <div className="project-text-box">
                  <div className="project-text-heading">
                    <h3>
                      <span className="bold-and-change-color-red">
                        KnowMyCanada
                      </span>
                    </h3>
                    <p className="project-text-subhead">
                      Trivia Quiz App with a Fun Canadian Twist
                    </p>
                  </div>
                  <div className="project-text-container">
                    <div className="project-description">
                      <div className="project-description-video-image">
                        <a
                          href="https://github.com/Sarasakthi/KnowMyCanada"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={ProjectKnowmycanada} alt="" />
                        </a>
                      </div>
                      <p className="project-description-text">
                        <div className="project-description-text">
                          <div className="project-description-text-intro">
                            A fun and interactive trivia quiz app that tests
                            users on quirky, lesser-known facts about Canada.
                            Built with Blazor and modern databases, it features
                            timed questions, dynamic scoring, and a responsive,
                            animated UI. Designed to be both educational and
                            engaging for all ages.
                          </div>
                          <span className="bold-and-change-color-green margin-top-ten display-flex">
                            Tech Stack:{" "}
                          </span>
                          <img
                            src={IconBullet}
                            alt=""
                            className="icon-bullet-left"
                          />
                          Blazor (WebAssembly), ASP.NET Core APIs, SQL Server &
                          Entity Framework Core, Azure App Services
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="sections" ref={aboutRef}>
        <div className="resume-inner">
          <h2 id="resume-header">
            <img src={BulletResume} alt="" className="bullet-header" />
            Resume
          </h2>

          <div className="resume-download">
            <a
              href={`${process.env.PUBLIC_URL}/myresumeSara.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-download-button"
            >
              <span className="link-icon bold-only">Download My Resume</span>
            </a>
          </div>

          <div className="resume-content">
            <iframe
              src={`${process.env.PUBLIC_URL}/myresumeSara.pdf`}
              title="Resume Viewer"
              width="100%"
              height="800px"
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="sections">
        <div className="contact-inner">
          <h2 id="contact-header">
            <img src={BulletContact} alt="" className="bullet-header" />
            Get In Touch
          </h2>

          <div className="contact-content">
            <div className="contact-text-main">
              <ul className="contact-text-main-intro">
                <li>
                  Let’s bring your ideas to life or simply have a conversation.
                  <br />
                  Reach out via the form or connect with me directly. I'll make
                  sure to respond promptly.
                </li>
              </ul>
            </div>

            <div className="contact-divide-main">
              <div className="contact-text-sub">
                <ul className="contact-text-sub-intro">
                  <li>
                    Email:{" "}
                    <a href="mailto:sarasakthikumar@gmail.com">
                      sarasakthikumar@gmail.com
                    </a>
                  </li>
                  <li>
                    Phone: <a href="tel:+18258232463">+1 (825)-823-2463</a>
                  </li>
                  <li>Location: Edmonton, AB, Canada</li>
                </ul>
              </div>

              <div className="contact-form-group">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    window.location.href = "mailto:sarasakthikumar@gmail.com";
                  }}
                >
                  <div className="contact-form-input">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="contact-form-input">
                    <label htmlFor="email">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="contact-form-input">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="contact-form-input">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="contact-form-input">
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
