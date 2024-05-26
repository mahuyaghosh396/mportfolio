import React from 'react';
import './works.css';
import cybersecurity from '../../assets/portfolio-6.jpeg';

import prg from '../../assets/portfolio-3.jpeg';
import awsImg from '../../assets/portfolio-5.jpeg';

import { useState } from 'react';



const Works = () => {
  const initialSkills = [
    { name: 'Cyber Security', description: 'Cybersecurity', image: cybersecurity},

    { name: 'Programming', description: 'JAVA, HTML, CSS, React, MySql', image: prg},
    // Add more initial skills and certificates as needed
  ];

  const [skills, setSkills] = useState(initialSkills);
  const [showMore, setShowMore] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleViewMore = () => {
    setShowMore(!showMore); // Toggle the showMore state
    
    if (!showMore) {
      // If showMore is false, add additional images to the skills array
      const newSkill = { name: 'Cloud Computing', description: 'VMware, AWS, Google Cloud', image: awsImg };
      setSkills([...skills, newSkill]);
    } else {
      // If showMore is true, reset the skills array to initialSkills
      setSkills(initialSkills);
    }
  };

  const handleImageClick = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
  <section id = "works">
  
      <h2 className="works-title">My Skills and Certifications</h2>
      <div className="works-grid">
        {skills.map((skill, index) => (
          <div className="work-item" key={index}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
            <img
              src={skill.image}
              alt={`${skill.name} certificate`}
              className="certificate-image"
              onClick={() => handleImageClick(skill.image)}
            />
          </div>
        ))}
      </div>
      <button onClick={handleViewMore} className="view-more-button">
        {showMore ? "View Less" : "View More"}
      </button>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Enlarged certificate" />
        </div>
      )}

  </section>
  );
};

export default Works;