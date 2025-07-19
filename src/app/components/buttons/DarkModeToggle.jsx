'use client'

import { useEffect, useState } from "react";
import "./DarkModeToggle.css";
import Image from "next/image";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDarkMode(savedTheme === "dark");
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    } else {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="dark-mode-toggle" onClick={toggleDarkMode}>
      <div className={`toggle-bar ${isDarkMode ? "dark" : "light"}`}>
        <Image
          src={isDarkMode ? "/themepicker/moon.svg" : "/themepicker/sun.svg"}
          alt={isDarkMode ? "Dark Mode" : "Light Mode"}
          width={24}
          height={24}
          className="toggle-icon"
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
