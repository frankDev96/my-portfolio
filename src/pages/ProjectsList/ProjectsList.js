import React from "react";
import "./ProjectsList.css";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import { projects } from '../../utils/constants'
import { useNavigate } from "react-router-dom";

const ProjectsList = () => {
  const navigate = useNavigate();
  const handleNavigate = (item) => {
    if (item?.id) {
      navigate(`/case-study/${item.id}`);
    }
  };

  return (
    <div id="projects" className="projects-container">
      <h2 className="header-projects">PROJECTS</h2>
      <p className="intro-text">
        Here you will find some of the personal and client projects that I
        created, each with its own case study.
      </p>

      <div className="projects-list">
        {projects?.map((item) => (
          <PortfolioItem key={item.id} item={item} onClick={() => handleNavigate(item)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsList;
