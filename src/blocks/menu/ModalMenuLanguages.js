import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory, useLocation } from "react-router-dom";
import "./ModalMenuLanguages.scss";

const ModalMenuLanguages = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const history = useHistory();
  const location = useLocation();

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "hy", label: "Հայերեն", flag: "🇦🇲" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

  const handleChangeLanguage = (e) => {
    const lng = e.target.value;
    const newPath = location.pathname.replace(/^\/(en|hy|ru)/, `/${lng}`);
    i18n.changeLanguage(lng);
    history.push(newPath);
  };

  return (
    <div className="language-dropdown-wrapper">
      <select
        value={currentLang}
        onChange={handleChangeLanguage}
        className="language-select upperCasText"
        aria-label="Language selector"
      >
        {languages.map(({ code, flag, label }) => (
          <option key={code} value={code}>
            {`${flag} ${label}`}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ModalMenuLanguages;
