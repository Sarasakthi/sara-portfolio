import React from "react";
import "./Footer.css";
import LogoLinkedin from "../assets/images/logo-linkedin.png";
import LogoGit from "../assets/images/logo-github.png";
import LogoFB from "../assets/images/logo-facebook.png";
import ArrowUpIcon from "../assets/images/gotop.png";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <a href="#hero" className="return-home-link" title="Back to top">
          <div className="return-home">
            <img src={ArrowUpIcon} alt="Back to Top" />
          </div>
        </a>
        <div className="social-links-container">
          <p>Connect with me on </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/saraswathisakthikumar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-linkedin">
                <img src={LogoLinkedin} alt="LinkedIn" />
              </div>
            </a>

            <a
              href="https://github.com/Sarasakthi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-github">
                <img src={LogoGit} alt="GitHub" />
              </div>
            </a>

            <a
              href="https://www.facebook.com/sakthikumarsaraswathi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="social-facebook">
                <img src={LogoFB} alt="Facebook" />
              </div>
            </a>
          </div>
        </div>
      </footer>

      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Sara. All rights reserved.</p>
      </div>
    </>
  );
};

export default Footer;
