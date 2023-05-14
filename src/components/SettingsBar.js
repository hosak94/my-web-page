import React, { useEffect, useState } from "react";
import "../styles/settingsbar.css";
import { DarkModeSwitch } from "./DarkModeSwitch";

export default function SettingsBar() {
  const [theme, setTheme] = useState();
  useEffect(() => {
    const currentTheme = document
      .querySelector("body")
      .getAttribute("data-theme");

    setTheme(currentTheme);
  }, []);
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="settingsBar">
      <div className="settings">
        <div>
          <DarkModeSwitch onThemeChange={handleThemeChange} />
        </div>

        <div className="mode-text">
          {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
        </div>
        <div className="divider-text"></div>
        <div className="language-text">
          <span id="lang">TÜRKÇE</span>'YE GEÇ
        </div>
      </div>
    </div>
  );
}
