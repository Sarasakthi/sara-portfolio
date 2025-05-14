import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Sakthi. All rights reserved.</p>
        <p>Connect with me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </div>
    </footer>
  );
};

export default Footer;
