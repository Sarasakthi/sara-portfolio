import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import HotAirBear from "../assets/images/beardrop-nobg.png";

const Hero = () => {
  const canvasRef = useRef(null);
  const [rotate, setRotate] = useState(false);

  const toggleRotation = () => {
    setRotate((prev) => !prev);
  };

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
                <p>Full Stack Developer | System Analyst | Software Engineer</p>
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

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in full-stack development,
          systems analysis, and more.
        </p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <p>Here are some projects I've worked on...</p>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <p>.NET, React, SQL, Azure, C#, JavaScript, etc.</p>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Feel free to reach out via email or LinkedIn.</p>
      </section>
    </>
  );
};

export default Hero;
