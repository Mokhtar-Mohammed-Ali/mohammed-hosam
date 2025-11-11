import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Mohamed Hossam</h3>
            <p className="footer-tagline">UI/UX Designer crafting digital experiences</p>
          </div>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Shreef Hossam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




