import React from "react";
import "./ProjectsList.css";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";

const ProjectsList = () => {

  const projects = [
    {
      id: 1,
      title: "LILO - Fish, Meat, Vegetables",
      description:
        "Lilo app is an innovative hyperlocal delivery app I developed, which has gained traction for its unique approach to neighborhood logistics. It has been highlighted on major tech sites and used by communities to connect local businesses with nearby customers, streamlining delivery and enhancing local shopping experiences.",
      image: require("../../assets/images/lilo.png"),
      caseStudyLink: "#",
    },
    {
      id: 2,
      title: "الراعي - Al Raie",
      description:
        "Developed an innovative mobile application for Al Raie, the first specialized platform catering to the needs of animal enthusiasts. The app provides services for a wide range of animals such as birds, sheep, camels, and horses, while also offering land supplies like tents and fire hoods. Designed to facilitate customer engagement, it allows users to easily search for, purchase, or sell animal-related products and wild necessities, streamlining the process through an intuitive interface and search functionalities.",
      image: require("../../assets/images/alraie app.png"),
      caseStudyLink: "#",
    },
  ];

  return (
    <div id="projects" className="projects-container">
      <h2 className="header-projects">PROJECTS</h2>
      <p className="intro-text">
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study.
      </p>

      <div className="container mx-auto px-4">
        <div className="space-y-20">
          {projects?.map((item) => {
            return <PortfolioItem item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
