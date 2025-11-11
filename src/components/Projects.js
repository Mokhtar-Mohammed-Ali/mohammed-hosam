import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Book hub app',
      category: 'Mobile Design',
      description: 'Book Hub is a mobile application concept created to simplify how users discover new books manage their personal reading lists, and connect with a community of fellow readers. The aim was to build a user-centered experience that supports both casual readers and avid bibliophiles.',
      image: '🛍️',
      tags: ['Figma', 'UI Design', 'Prototyping']
    },
    {
      id: 2,
      title: 'Fit app',
      category: 'Web Design',
      description: 'Fit App is a mobile-first concept created to help users of all fitness levels discover workouts, set meaningful goals, track progress, and stay motivated through engaging visuals and social/friendly algorithms. The aim was to build an experience that turns intention (“I want to get fit”) into action (“I’m training today”) and supports ongoing commitment.',
      image: '🏥',
      tags: ['UX Research', 'Design System', 'Figma']
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of my recent work showcasing design thinking and problem-solving
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


