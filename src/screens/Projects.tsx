import React from "react";
import { Project } from "../types";

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
    const projects: Project[] = [
        // Add your projects here
    ];

    return (
        <div className="projects-section">
            <h1>My Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.caseStudyLink}>View Case Study</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
