import React from 'react'
import './ProjectCard.scss'

const ProjectCard = ({ imageSrc, projectName, description }) => {
  return (
    <div className="card-container">
      <img src={imageSrc} alt={projectName} />
      <h2>{projectName}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ProjectCard
