import React from "react";
import { Element } from "react-scroll";
import "../styles/skills.css";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();
  return (
    <Element name="skillsScroll" className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        <div>
          <h3>HTML</h3>
          <p>{t("html_skill")}</p>
        </div>
        <div>
          <h3>CSS</h3>
          <p>{t("css_skill")}</p>
        </div>
        <div>
          <h3>Javascript</h3>
          <p>{t("javascript_skill")}</p>
        </div>
        <div>
          <h3>React.Js</h3>
          <p>{t("react_skill")}</p>
        </div>
        <div>
          <h3>Redux</h3>
          <p>{t("redux_skill")}</p>
        </div>
        <div>
          <h3>Node.Js</h3>
          <p>{t("nodejs_skill")}</p>
        </div>
      </div>
      <div className="skill-bottomline"></div>
    </Element>
  );
}
