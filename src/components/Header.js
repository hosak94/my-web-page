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
          <h3>Deneme</h3>
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
        <img
          src="https://s3-alpha-sig.figma.com/img/76b0/6993/b04fd1fa29a883e2f4b8b8577a5c82eb?Expires=1684713600&Signature=n~CsTL~WOVGu8B8m~mdDFzYTXmLrn5ku1Kd0q0NREn61-cV837~u0q-eMot64BzrifVN-TlZnTK-kKZhVaf6hUDR4WOLemmL~TVgWzgY-cdQGrMONgzgHjytZwwA9NxDli~5NedWYW4~ei4asYN1GVqDJfOb4OcUUA6uVrG4Ra~udLfTYPCU5X25KJbjJ0ctC-p-HuZMULjCbBWn7wwayW-4giiHldzhsAzoHVaMjGQeTfjbt-DOfs1HHdsG7q4nxfDkYjbhIgSlNbnL5ikTC5naIhOPY3obxYDJUoSkh3IF0nO3JAy2xu1bsjcOHcLdYR4MGv-dr3WWthFl3rxLiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt=""
        />
      </div>
    </div>
  );
}
