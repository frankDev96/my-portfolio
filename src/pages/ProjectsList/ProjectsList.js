import React from "react";
import "./ProjectsList.css";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { projects } from '../../utils/constants'

const ProjectsList = () => {


  return (
    <div id="projects" className="projects-container">
      <h2 className="header-projects">PROJECTS</h2>
      <p className="intro-text">
        Here you will find some of the personal and client projects that I
        created, each with its own case study.
      </p>

      <div className="projects-list">
        {projects?.map((item) => (
          <PortfolioItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
