'use client'

import React from "react";
import { useLanguage } from "../../../context/LanguageContext"; // ✅ FIXED IMPORT
import "./LanguagePicker.css";

const LanguagePicker = () => {
  const { selectedLanguage, changeLanguage } = useLanguage();

  return (
    <select
      className="language-picker"
      value={selectedLanguage}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">🇬🇧 English</option>
      <option value="es">🇪🇸 Español</option>
      <option value="el">🇬🇷 Greek</option> {/* ✅ Correct language code */}
    </select>
  );
};

export default LanguagePicker;
