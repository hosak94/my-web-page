import React from "react";
import { Element } from "react-scroll";
import { FaHandPointRight } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <Element name="contactScroll" className="footer-container">
      <div className="footer">
        <p>
          Let's work together on <br />
          your next product.
        </p>
      </div>
      <div className="footer-link">
        <div className="mail">
          <FaHandPointRight className="right-hand" />
          yigitcanhosak@gmail.com
        </div>
        <div className="my-link">
          <p className="blog">Personal Blog</p>
          <a href="https://github.com/hosak94" className="footer-github">
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/yiğitcan-hoşak-3741a718a"
            className="footer-linkedln"
          >
            Linkedln
          </a>
        </div>
      </div>
    </Element>
  );
}
