import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar no-animation">
      <div className="navbar-content">
        <div className="logo">
          <Link
            to="/"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = process.env.PUBLIC_URL || "/";
            }}
          >
            Sara
          </Link>
        </div>
        <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
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
