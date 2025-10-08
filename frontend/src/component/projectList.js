import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AirbnbImg from './images/Airbnb.png';
import ZerodhaImg from './images/zerod.jpeg';
import ChatbotImg from './images/images.jpeg';
import MedChatImg from './images/medchat.webp';
import CipherImg from './images/cipher.jpeg';
 import FeatureImg from './images/feature.jpg';


const Project = (props) => (
  <div className="project-card">
    <img src={props.project.imageUrl} alt={props.project.title} className="project-image" />
    <h3>{props.project.title}</h3>
    <p>{props.project.description}</p>
    <div className="project-tags">
        {props.project.technologies.map(tech => <span key={tech} className="tag">{tech}</span>)}
    </div>
    <a href={props.project.projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

function ProjectList() {
  const defaultProjects = [
  {
    _id: '1',
    title: 'StayFinder',
    description: 'A full-stack website of Airbnb allowing users to search, book, and manage stays with real-time availability.',
    imageUrl: AirbnbImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'CSS'],
    projectUrl: '#'
  },
  {
    _id: '2',
    title: 'Full stack Stock Trading Platform',
    description: 'A stock market portfolio tracker with real-time updates and visualization, inspired by Zerodha platform.',
    imageUrl: ZerodhaImg,
    technologies: ['React', 'Node.js', 'Express', 'Chart.js'],
    projectUrl: '#'
  },
  {
    _id: '3',
    title: 'AI Health Chatbot',
    description: 'An AI-powered chatbot for disease diagnosis using decision trees and Bayesian probability.',
    imageUrl: ChatbotImg,
    technologies: ['Python', 'AI', 'Machine Learning', 'Flask'],
    projectUrl: '#'
  },
  {
    _id: '4',
    title: 'SymptoCare (Medical Chatbot)',
    description: 'A future project: AI/ML-based medical chatbot for symptom checking and healthcare guidance.',
    imageUrl: MedChatImg,
    technologies: ['Python', 'Machine Learning', 'React'],
    projectUrl: '#'
  },
  {
    _id: '5',
    title: 'CipherVault',
    description: 'A future secure collaborative digital diary with end-to-end encryption for private data storage.',
    imageUrl: CipherImg,
    technologies: ['React', 'Node.js', 'MongoDB', 'Security'],
    projectUrl: '#'
  },
  {
    _id: '6',
    title: 'Feature Projects...',
    description: 'Future projects coming soon...',
    imageUrl: FeatureImg,
    technologies: ['--', '--'],
    projectUrl: '#'
  }
];


  const [projects, setProjects] = useState(defaultProjects);

 useEffect(() => {
  // This checks if the code is running on the live server ('production')
  // If true, it uses your Render URL.
  // If false (i.e., running locally), it uses your localhost URL.
  const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://sayeedportfolio.onrender.com'
    : 'http://localhost:5000/projects/';

  axios.get(API_URL)
    .then(response => {
      setProjects(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map(project => <Project project={project} key={project._id} />)}
      </div>
    </section>
  )
}

export default ProjectList;
