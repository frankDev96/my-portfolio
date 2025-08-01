import React from 'react';
import { Project } from '../types';

interface ProjectItemProps {
  project: Project;
  onClick?: (project: Project) => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(project);
    }
  };

  return (
    <div className="project-item" onClick={handleClick}>
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
      />
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <button className="view-case-study">View Case Study</button>
      </div>
    </div>
  );
};

export default ProjectItem;