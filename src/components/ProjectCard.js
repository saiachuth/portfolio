// ProjectCard.js
import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ title, description, imageUrl, projectLink }) => {
  return (
            <div id='projects'>

    <div className='project-card'>
      <img className='project-image' src={imageUrl} alt={title} />
      <div className='project-details'>
        <h3 className='project-title'>{title}</h3>
        <p className='project-description'>{description}</p>
        <a
          className='project-link'
          href={projectLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          View Project
        </a>
      </div>
    </div>
            </div>
  );
};

export default ProjectCard;
