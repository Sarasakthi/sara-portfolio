import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoSara from "../assets/images/logo-sara.svg";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar no-animation">
      <div className="navbar-content">
        <div className="logo-nav">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = process.env.PUBLIC_URL || "/";
            }}
          >
            <img
              src={LogoSara}
              alt="Sara"
              className="logo-sara-img"
              onClick={() => {
                window.location.href = process.env.PUBLIC_URL || "/";
              }}
            />
          </Link>
        </div>
        <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <button className="hamburger" onClick={toggleMobileMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
