import React from 'react';
import myPhoto from './myPhoto1.png'; 

function About() {
  return (
    <section id="about" className="about-section">
        <h2>About Me</h2>
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Sayeed Baig" />
        </div>
        <div className="about-text">
          <p>
            I am Sayeed Baig, a passionate Computer Science student currently pursuing my Bachelor of Engineering (B.E.) in Bangalore. I come from a humble background in a village where access to modern educational resources was limited. Despite these challenges, I have always been determined to pursue knowledge and expand my skills in technology.
          </p>
          <p>
            My early education was in Urdu medium, where I completed my schooling up to the 10th grade. Following this, I moved to Bhadravathi town for my 11th and 12th (PUC) studies in the science stream. Transitioning from Urdu medium to English medium in science posed significant challenges, but I overcame them through consistent effort and perseverance.
          </p>
          <p>
            Currently, I am in my 5th semester of B.E., building a strong foundation in programming, algorithms, and software development. Alongside academics, I have worked on several projects including AI-powered health chatbots, portfolio websites, and full-stack applications.
          </p>
          <p>
            My journey from a small village and limited resources to pursuing engineering in a metropolitan city has shaped my resilience, adaptability, and passion for learning. I aspire to grow in the field of software development and artificial intelligence, contributing to projects that create meaningful impact.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About; // ✅ default export
