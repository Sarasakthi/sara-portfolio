import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sakthi. All rights reserved.</p>
        <p>Connect with me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
      <p>© 2025 Sakthi | All rights reserved</p>
      <div className="social-links">
        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
