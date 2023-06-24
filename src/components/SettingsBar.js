import React, { useEffect, useState } from "react";
import "../styles/settingsbar.css";
import { DarkModeSwitch } from "./DarkModeSwitch";
import { useTranslation } from "react-i18next";

export default function SettingsBar() {
  const [theme, setTheme] = useState();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const currentTheme = document
      .querySelector("body")
      .getAttribute("data-theme");

    setTheme(currentTheme);
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const changeLanguage = () => {
    const newLanguage = i18n.language === "tr" ? "en" : "tr";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="settingsBar">
      <div className="settings">
        <div>
          <DarkModeSwitch onThemeChange={handleThemeChange} />
        </div>

        <div className="mode-text">
          {theme === "dark" ? t("light_mode") : t("dark_mode")}
        </div>
        <div className="divider-text"></div>
        <div className="language-text" onClick={changeLanguage}>
          {i18n.language === "en" ? <span>TÜRKÇE</span> : <span>ENGLISH</span>}
        </div>
      </div>
    </div>
  );
}
