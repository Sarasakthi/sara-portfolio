import React, { useEffect, useRef } from "react";
import WelcomeImage from "../assets/images/beardrop-nobg.png";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  // ... canvas animation logic unchanged

  return (
    <section id="hero" className="hero-section">
      <canvas ref={canvasRef} className="connecting-dots" />
      <div className="hero-wrapper">
        <div className="hero-content hero-row">
          <img
            src={WelcomeImage}
            alt="Welcome Bear holding welcome board"
            className="welcome-bear"
          />
          <div className="hero-text">
            <h1>Hi, I'm Sara</h1>
            <p>Full Stack Developer | System Analyst | .NET Expert</p>
          </div>
        </div>
        <div className="container">
          <h1>Welcome to My Portfolio</h1>
          <p>
            Building meaningful and impactful solutions with a focus on
            performance and clean code.
          </p>
          <button className="cta-button">Get in Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
