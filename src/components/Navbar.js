import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Sara</Link>
      </div>
      <ul className={`nav-links ${isMobile ? "mobile" : ""}`}>
        <li>
          <Link to="/AboutSara">About</Link>
        </li>
        <li>
          <Link to="/SaraProjects">Projects</Link>
        </li>
        <li>
          <Link to="/SaraSkills">Skills</Link>
        </li>
        <li>
          <Link to="/ContactSara">Contact</Link>
        </li>
      </ul>
      <button className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Navbar;
