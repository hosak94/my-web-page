import React from "react";
import { Element } from "react-scroll";
import { projectData } from "../data/projects.data";

export default function Projects() {
  return (
    <Element name="projectsScroll" className="projects-container">
      <h2>Projects</h2>
      <div className="projects">
        {projectData.map((project) => (
          <div className="projects-info" key={project.projectName}>
            <img
              src={`${process.env.PUBLIC_URL}/project-photo/${project.projectImg}`}
              alt={project.projectName}
            />
            <h4>{project.projectName}</h4>
            <p>{project.projectDescription}</p>
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
