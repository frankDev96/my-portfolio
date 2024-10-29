import React from "react";
import "./ProjectsList.css";
import PortfolioItem from "../PortfolioItem/PortfolioItem";

const ProjectsList = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "LILO - Fish, Meat, Vegetables",
      description:
        "Lilo app is an innovative hyperlocal delivery app I developed, which has gained traction for its unique approach to neighborhood logistics. It has been highlighted on major tech sites and used by communities to connect local businesses with nearby customers, streamlining delivery and enhancing local shopping experiences.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGif3TfqL1tdwXQDpwnLr83ysXe2vMpzFoIg&s",
      caseStudyLink: "#",
    },
    {
      id: 2,
      title: "Wilsonport",
      description:
        "Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGif3TfqL1tdwXQDpwnLr83ysXe2vMpzFoIg&s",
      caseStudyLink: "#",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      {/* Header Section */}
      <h2 className="header-projects">PROJECTS</h2>
      <p className="intro-text">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>

      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {
            projects?.map((item) => {
              return <PortfolioItem item={item} />

            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
