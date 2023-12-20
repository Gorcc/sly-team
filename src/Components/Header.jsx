import React from "react";
import "../Styles/Header.scss";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import slyLogo from "../Styles/TEAMSLY.png";

const Header = () => {
  const [language, setLanguage] = useState("en");
  const [t, i18n] = useTranslation("global");

  const handleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <img src={slyLogo} alt="Logo" />
      </div>
      <ul>
        <li>
          <a href="#">{t("header.home")}</a>
        </li>
        <li className="dropdown-wrapper">
          <a href="#" className="dropdown-btn">
            {t("header.videos")}&nbsp;˅
          </a>
          <ul className="dropdown">
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Images</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">{t("header.roaster")}</a>
        </li>
        <li>
          {" "}
          <a href="#">{t("header.cars")}</a>
        </li>
        <li>
          <a href="#">{t("header.team")}</a>
        </li>
        <li>
          <a href="#">{t("header.clips")}</a>
        </li>

        <button className="language-btn" onClick={handleLanguage}>
          <FontAwesomeIcon icon={faGlobe} /> &nbsp;
          {language}
        </button>
      </ul>
    </div>
  );
};

export default Header;
