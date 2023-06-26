import React from "react";
import { Element } from "react-scroll";
import "../styles/skills.css";
import { useTranslation } from "react-i18next";
import { skillsData } from "../data/skills-data";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Element name="skillsScroll" className="skills">
      <h2>{t("skills")}</h2>
      <div className="skill-list">
        {skillsData.map((skill) => (
          <div key={skill.name}>
            <h3>{skill.name}</h3>
            <p>{t(skill.description)}</p>
          </div>
        ))}
      </div>
      <div className="skill-bottomline"></div>
    </Element>
  );
}
