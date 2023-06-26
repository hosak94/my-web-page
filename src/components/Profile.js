import React from "react";
import "../styles/profile.css";
import { useTranslation } from "react-i18next";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="profile-container">
      <div className="profile">
        <h2>{t("profile")}</h2>
        <div className="profile-style">
          <div className="my-info">
            <h3>{t("profile")}</h3>
            <div className="info-container">
              <div className="info-question">
                <p>{t("date_of_birth")}</p>
                <p>{t("city_of_residence")}</p>
                <p>
                  {t("education")}
                  <br /> <br /> <br />
                </p>
                <p>{t("preferred_job_role")}</p>
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
            <h3>{t("about_me_tag")}</h3>
            <div>
              <p>{t("about_me_p1")}</p>
              <p>{t("about_me_p2")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-bottomline"></div>
    </div>
  );
}
