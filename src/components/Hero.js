import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-greeting">Hello, I'm</div>
          <h1 className="hero-name">
            <span className="name-first">Mohamed</span>
            <span className="name-last">Hossam</span>
          </h1>
          <h2 className="hero-title">UI/UX Designer</h2>
          <p className="hero-description">
            I create beautiful, intuitive, and user-centered digital experiences 
            that solve real problems and delight users.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <div className="hero-image-container">
            <img 
              src="/hero-photo.png" 
              alt="Mohamed Hossam" 
              className="hero-image"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div class="profile-icon">MH</div>';
              }}
            />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse"></div>
      </div>
    </section>
  );
};

export default Hero;



