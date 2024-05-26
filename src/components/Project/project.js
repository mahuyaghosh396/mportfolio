import React from 'react';
import './project.css';

const Projects = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is a brief description of Project One. It involves web design and development.',
      link: 'https://www.example.com/project-one',
      image: 'src/assets/portfolio-5.png' // Replace with your image URL
    },
    {
      title: 'Project Two',
      description: 'This is a brief description of Project Two. It focuses on cloud computing solutions.',
      link: 'https://www.example.com/project-two',
       // Replace with your image URL
    },
    {
      title: 'Project Three',
      description: 'This is a brief description of Project Three. It covers cybersecurity topics.',
      link: 'https://www.example.com/project-three',
  
    }
  ];

  return (
    <section id="project"> 
    <div className="projects-container">
      <h2 className="projects-title">My Projects & Internship Experience</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
