import React, { useEffect, useState } from "react";
import "../styles/darkmode.css";

export const DarkModeSwitch = ({ onThemeChange }) => {
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || "dark"
  );

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

  useEffect(() => {
    if (selectedTheme === "dark") {
      setDarkMode();
    } else {
      setLightMode();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTheme]);

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setSelectedTheme("dark");
    } else {
      setSelectedTheme("light");
    }
  };

  return (
    <div className="dark_mode">
      <label className="switch">
        <input
          type="checkbox"
          onChange={toggleTheme}
          defaultChecked={selectedTheme === "dark"}
        />
        <div className="slider"></div>
        <div className="bg"></div>
      </label>
    </div>
  );
};
