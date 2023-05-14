import React from "react";
import "../styles/profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile">
        <h2>Profile</h2>
        <div className="profile-style">
          <div className="my-info">
            <h3>Profile</h3>
            <div className="info-container">
              <div className="info-question">
                <p>Doğum tarihi</p>
                <p>İkamet Şehri</p>
                <p>
                  Eğitim Durumu
                  <br /> <br /> <br />
                </p>
                <p>Tercih Ettiği Rol</p>
              </div>
              <div className="info-answer">
                <p>16.02.1994</p>
                <p>İzmir</p>
                <p>
                  İstanbul Üniversitesi <br /> Maden Mühendisliği <br />{" "}
                  Lisans,2019
                </p>
                <p>Full Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="about-me">
            <h3>About Me</h3>
            <div>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
                Veniam aut, odit laborum aliquam voluptatum nisi mollitia.
                <br />
                <br /> Mnima accusamus ratione soluta aperiam sit voluptate?
                <br />
                Dicta quod deserunt quam temporibus cumque magnam!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-bottomline"></div>
    </div>
  );
}
