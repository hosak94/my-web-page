import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import { projectData } from "../data/projects.data";
import "../styles/projects.css";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { t } = useTranslation();

  const handleOnClick = (url) => {
    window.open(url, "_blank");
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const displayedProjects = [
    projectData[currentProjectIndex],
    projectData[(currentProjectIndex + 1) % projectData.length],
    projectData[(currentProjectIndex + 2) % projectData.length],
  ];

  return (
    <Element name="projectsScroll" className="projects-container">
      <h2>{t("projects")}</h2>
      <div className="project-border">
        <div>
          <button className="previous-button" onClick={handlePreviousProject}>
            <FaArrowLeft />
          </button>
        </div>
        <div className="projects">
          {displayedProjects.map((project) => (
            <div className="projects-info" key={project.projectName}>
              <img
                src={`${process.env.PUBLIC_URL}/project-photo/${project.projectImg}`}
                alt={t(project.projectName)}
                onClick={() => handleOnClick(project.projectUrl)}
              />
              <div className="project-description">
                <h4>{t(project.projectName)}</h4>
                <p>{t(project.projectDescription)}</p>
              </div>
              <div className="project-features">
                {project.projectSkill.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-link">
                <Link to={project.gitHub}>Github</Link>
                <Link to={project.projectUrl}>View Site</Link>
              </div>
            </div>
          ))}
        </div>

        <div>
          <button className="next-button" onClick={handleNextProject}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </Element>
  );
}
