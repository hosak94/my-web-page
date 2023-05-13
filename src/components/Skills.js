import React from "react";
import { Element } from "react-scroll";
import { skillsData } from "../data/skills-data";

export default function Skills() {
  return (
    <Element name="skillsScroll" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skillsData.map((skill) => (
          <div key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
      <div className="skill-bottomline"></div>
    </Element>
  );
}
