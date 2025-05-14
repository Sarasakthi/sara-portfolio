import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">Sara</a>
      </div>
      <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
