import React from "react";
import { Element } from "react-scroll";
import { projectData } from "../data/projects.data";
import "../styles/projects.css";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <Element name="projectsScroll" className="projects-container">
      <h2>{t("projects")}</h2>
      <div className="projects">
        {projectData.map((project) => (
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
    </Element>
  );
}
