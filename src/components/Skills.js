import React from "react";
import { Element } from "react-scroll";
import "../styles/skills.css";
import { useTranslation } from "react-i18next";
import { FaHtml5, FaCode, FaToolbox } from "react-icons/fa";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Element name="skillsScroll" className="skills">
      <h2>{t("skills")}</h2>
      <div className="skills-container">
        <div className="frontend-skills">
          <FaHtml5 className="html-logo" />
          <h3 className="skill-h3">FrontEnd</h3>
          <div className="borderline"> </div>
          <div className="container-p">
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Redux</p>
            <p>TailwindCSS</p>
            <p>Bootstrap</p>
            <p>APIs</p>
          </div>
        </div>
        <div className="backend-skills">
          <FaCode className="backend-logo" />
          <h3 className="skill-h3">BackEnd</h3>
          <div className="borderline"> </div>
          <div className="container-p">
            <p>Java/SpringBoot</p>
            <p>NodeJS</p>
            <p>Express</p>
            <p>MySQL</p>
            <p>MongoDB</p>
            <p>RestAPI</p>
          </div>
        </div>
        <div className="tool-skills">
          <FaToolbox className="tools-logo" />
          <h3 className="skill-h3">Tools</h3>
          <div className="borderline"> </div>
          <div className="container-p">
            <p>Git</p>
            <p>Github</p>
            <p>Heroku</p>
            <p>VsCode</p>
            <p>Postman</p>
            <p>IntelliJ</p>
          </div>
        </div>
      </div>

      <div className="skill-bottomline"></div>
    </Element>
  );
}
