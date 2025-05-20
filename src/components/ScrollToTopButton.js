import React, { useState, useEffect } from "react";
import "./ScrollToTopButton.css";
import ArrowUpIcon from "../assets/images/gotop.png";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <button className="scroll-to-top" onClick={scrollToTop}>
      <img src={ArrowUpIcon} alt="Back to Top" />
    </button>
  ) : null;
};

export default ScrollToTopButton;
