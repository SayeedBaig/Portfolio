import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaCode } from 'react-icons/fa'; // icons for category titles

function Skills() {
  const skills = {
    "Languages": ["C","C++", "Python", "Java","JavaScript"],
    "Frontend": ["React", "HTML5", "CSS", "Redux","Tailwind CSS"],
    "Backend": ["Node.js", "Express.js", "REST APIs"],
    "Databases": ["MongoDB", "MySQL", "PostgreSQL"],
    "Tools": ["CodeBlocks", "Eclips", "VS Code","Pycharm"]
  };

  const icons = {
    "Languages": <FaCode />,
    "Frontend": <FaReact />,
    "Backend": <FaNodeJs />,
    "Databases": <FaDatabase />,
    "Tools": <FaTools />
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.keys(skills).map(category => (
          <div key={category} className="skill-card">
            <div className="skill-header">
              {icons[category]} <h3>{category}</h3>
            </div>
            <ul>
              {skills[category].map(skill => (
                <li key={skill} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
