import React from 'react';
import './project.css';

const Projects = () => {
  const projectList = [
    {
      title: 'PetClinicHub',
      description: 'Our pet clinic hub provides information about the nearest pet clinics, emergency services, vaccination schedules, and more. We aim to make it easy for pet owners to access essential services for their furry friends..',
      link: 'https://radiant-raindrop-2d58f2.netlify.app/#team',
      
    },
    {
      title: 'Design Birthday card',
      description: 'This is an interactive birthday card design created with HTML, CSS, and JavaScript, featuring animated balloons and heartfelt messages for a personalized birthday greeting. ',
      link: 'https://mahuyaghosh396.github.io/birthday_card/',
       // Replace with your image URL
    },
    
  ];

  return (
    <section id="project"> 
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
           
           <h3 className="project-title" style={{ color: "black" }}>{project.title}</h3>


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
