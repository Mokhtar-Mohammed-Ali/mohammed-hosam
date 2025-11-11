import React, { useState, useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = skillsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const skillCategories = [
    {
      title: 'Design Tools',
      skills: [
        { name: 'Figma', level: 95 },
        { name: 'Adobe XD', level: 50 },
        { name: 'Sketch', level: 50 },
        { name: 'Photoshop', level: 50 },
        { name: 'Illustrator', level: 50 }
      ]
    },
    {
      title: 'UX Methods',
      skills: [
        { name: 'User Research', level: 90 },
        { name: 'Wireframing', level: 95 },
        { name: 'Prototyping', level: 92 },
        { name: 'Usability Testing', level: 88 },
        { name: 'Design Systems', level: 90 }
      ]
    },
   
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills-container">
        <div className="section-header">
          <span className="section-tag">Skills & Expertise</span>
          <h2 className="section-title">What I Bring to the Table</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className={`skill-progress ${isVisible ? 'animate' : ''}`}
                        style={isVisible ? { width: `${skill.level}%` } : { width: '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;


