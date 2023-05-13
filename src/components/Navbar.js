import React from "react";
import { Link } from "react-scroll";
import "../styles/navbar.css";

export default function Navbar() {
  return (
    <div className="container">
      <div className="navbar-container">
        <span>Y</span>
        <div className="navbar">
          <Link to="skillsScroll" smooth={true} duration={1000}>
            <h4>Skills</h4>
          </Link>
          <Link to="projectsScroll" smooth={true} duration={1000}>
            <h4>Projects</h4>
          </Link>
          <Link
            to="contactScroll"
            smooth={true}
            duration={1000}
            className="contact"
          >
            <h4>Hire me</h4>
          </Link>
        </div>
      </div>
    </div>
  );
}
