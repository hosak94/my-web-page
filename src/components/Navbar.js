import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="navbar-container">
        <span>Y</span>
        <div className="navbar">
          <Link to="skillsScroll" smooth={true} duration={1000}>
            <h4>{t("skills")}</h4>
          </Link>
          <Link to="projectsScroll" smooth={true} duration={1000}>
            <h4>{t("projects")}</h4>
          </Link>
          <Link
            to="contactScroll"
            smooth={true}
            duration={1000}
            className="contact"
          >
            <h4>{t("hire_me")}</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
