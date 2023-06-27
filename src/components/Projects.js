import React, { useState } from "react";
import { Element } from "react-scroll";
import { projectData } from "../data/projects.data";
import "../styles/projects.css";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { t } = useTranslation();

  const handlePreviousProject = () => {
    setCurrentProjectIndex((prevIndex) => prevIndex - 1);
  };

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => prevIndex + 1);
  };

  const displayedProjects = projectData.slice(
    currentProjectIndex,
    currentProjectIndex + 3
  );

  const showPreviousButton = currentProjectIndex !== 0;
  const showNextButton = currentProjectIndex + 3 < projectData.length;

  return (
    <Element name="projectsScroll" className="projects-container">
      <h2>{t("projects")}</h2>
      <div className="project-border">
        {showPreviousButton && (
          <div>
            <button className="previous-button" onClick={handlePreviousProject}>
              <FaArrowLeft />
            </button>
          </div>
        )}

        <div className="projects">
          {displayedProjects.map((project) => (
            <div className="projects-info" key={project.projectName}>
              <img
                src={`${process.env.PUBLIC_URL}/project-photo/${project.projectImg}`}
                alt={t(project.projectName)}
              />
              <h4>{t(project.projectName)}</h4>
              <p>{t(project.projectDescription)}</p>
              <div className="project-features">
                {project.projectSkill.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-link">
                <a href={project.gitHub}>Github</a>
                <a href={project.projectUrl}>Web Site</a>
              </div>
            </div>
          ))}
        </div>
        {showNextButton && (
          <div>
            <button className="next-button" onClick={handleNextProject}>
              <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </Element>
  );
}
