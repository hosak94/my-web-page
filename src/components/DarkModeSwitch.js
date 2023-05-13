import React from "react";
import "../styles/darkmode.css";

export const DarkModeSwitch = ({ onThemeChange }) => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
    onThemeChange("dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
    onThemeChange("light");
  };
  const selectedTheme = localStorage.getItem("selectedTheme");
  if (selectedTheme === "dark") {
    setDarkMode();
  }
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark-mode-container">
      <input
        className="dark-mode-input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark-mode-label" htmlFor="darkmode-toggle"></label>
      <label className="label-hilal"></label>
    </div>
  );
};
