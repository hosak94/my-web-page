import React from "react";
import "../styles/header.css";
import { Link } from "react-scroll";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="info-statement">
          <div className="name-line"></div>
          <h3>Yiğitcan Hoşak</h3>
        </div>
        <div className="bio-statement">
          <h1>
            I am a Full-Stack <br /> Developer...
          </h1>
        </div>
        <div className="info">
          <p>
            Hi, I’m Yiğitcan. If you are looking for a Developer who to craft
            solid and scalable frontend products with great user experiences.
            Let’s shake hands with me.
          </p>
        </div>
        <div className="icons">
          <Link
            to="contactScroll"
            smooth={true}
            duration={1000}
            className="contact-link"
          >
            <h4>Hire me</h4>
          </Link>
          <div className="social-icon">
            <a href="https://github.com/hosak94" className="social-icon">
              <FaGithub className="githubicon" />
              Github
            </a>
          </div>
          <div className="social-icon">
            <a
              href="https://www.linkedin.com/in/yiğitcan-hoşak-3741a718a"
              className="social-icon"
            >
              <FaLinkedinIn className="linedlnicon" />
              Linedln
            </a>
          </div>
        </div>
      </div>
      <div className="avatar">
        <img src="/project-photo/Profile.jpg" alt="" />
      </div>
    </div>
  );
}
