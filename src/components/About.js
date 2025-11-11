import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Crafting Digital Experiences</h2>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              A passionate and creative UI/UX Designer with a strong understanding of user-centered design
              principles. Skilled in designing intuitive interfaces, conducting user research, and creating engaging
              digital experiences. Eager to contribute fresh ideas and grow within a collaborative design team.
            </p>
            
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">fresh</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-card">
              <div className="card-content">
                <h3>Design Philosophy</h3>
                <p>"Simplicity is the ultimate sophistication. Great design is invisible—it just works."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




