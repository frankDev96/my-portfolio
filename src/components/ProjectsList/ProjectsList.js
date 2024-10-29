import React from "react";
import "./ProjectsList.css";

const ProjectsList = () => {
  // Sample projects data
  const projects = [
    {
      id: 1,
      title: "Dopefolio",
      description:
        "Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally",
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
        {/* Projects Grid */}
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="w-full lg:w-1/2 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                <button className="bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300">
                  CASE STUDY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
