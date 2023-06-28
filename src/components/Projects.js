import React, { useState } from "react";
import axios from "axios";
import { Element } from "react-scroll";
import { projectData } from "../data/projects.data";
import "../styles/projects.css";
import "../styles/projectsForMobile.css";
import { useTranslation } from "react-i18next";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Projects() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const { t } = useTranslation();

  const handleOnClick = (projectUrl) => {
    axios
      .get(projectUrl)
      .then((response) => {
        window.location.href = projectUrl;
      })
      .catch((error) => {
        console.error("Error occurred while redirecting:", error);
      });
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
  const displayedProjectsForMobile = [projectData[currentProjectIndex]];
  //telefon formatı için displayedProjects 3 ten 1'e düşürüldü.
  //projectsForMobile.css dosyasında telefon için css kodları düzenlendi.

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
                <span onClick={() => handleOnClick(project.projectUrl)}>
                  Github
                </span>
                <span onClick={() => handleOnClick(project.projectUrl)}>
                  View Site
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* Telefon için tekrar map kullandım. 
        Sadece (min-width: 319px) and (max-width: 480px) aralığında görünür oluyor.
        Not:Başka bir çözüm youlu araştır. */}
        <div className="projects-for-mobile">
          {displayedProjectsForMobile.map((project) => (
            <div className="projects-info-mobile" key={project.projectName}>
              <img
                src={`${process.env.PUBLIC_URL}/project-photo/${project.projectImg}`}
                alt={t(project.projectName)}
                onClick={() => handleOnClick(project.projectUrl)}
              />
              <div className="project-description-mobile">
                <h4>{t(project.projectName)}</h4>
                <p>{t(project.projectDescription)}</p>
              </div>
              <div className="project-features-mobile">
                {project.projectSkill.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
              <div className="project-link-mobile">
                <span onClick={() => handleOnClick(project.projectUrl)}>
                  Github
                </span>
                <span onClick={() => handleOnClick(project.projectUrl)}>
                  View Site
                </span>
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
