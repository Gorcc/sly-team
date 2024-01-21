import React from "react";
import "../Styles/Header.scss";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faX } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import {ReactComponent as ReactLogo} from '../Styles/slylogo.svg';
import Transition from "../transitions/transitionleft"
const Header = (props) => {
  const [language, setLanguage] = useState("tr");
  const [t, i18n] = useTranslation("global");
  const [isAnimated, setIsAnimated] = useState(false);
  const isVideos = props.videos;
  const [isClicked, setisClicked] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  const handleClick = () => {
    setisClicked(!isClicked);
  };


  useEffect(() => {
    setIsAnimated(true);
  }, []);
  const handleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
  
    sessionStorage.setItem("language", newLanguage);
  
    setLanguage(newLanguage);
  
    i18n.changeLanguage(newLanguage);
  };
  useEffect(() => {
   
  }, [language]);
  if (isMobile) {
    return (
      <>
        <div className="mobile-container">
          <div className="logo">
            <a href="/">
              <ReactLogo className="logo-img"></ReactLogo>
            </a>
          </div>
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faBars}
          ></FontAwesomeIcon>
        </div>
        {isClicked && (
          <div className={isClicked ? "right-bar width-anim" : "right-bar"}>
            <FontAwesomeIcon
              onClick={handleClick}
              icon={faXmark}
            ></FontAwesomeIcon>
            <div className="header-elements">
              <ul className="header-list mobile-header">
                <li>
                  <a href="/">{t("header.home")}</a>
                </li>
             

                <li>
                  <a href="/videos">{t("header.media")}</a>
                </li>
                <li>
                  <a href="/images">{t("header.images")}</a>
                </li>

                
                <li>
                  <a href="/driftcrew">{t("home.drift1")}</a>
                </li>
                <li>
                  <a href="/rpcrew">{t("home.race1")}</a>
                </li>

                <li>
                  {" "}
                  <a href="/cars">{t("header.cars")}</a>
                </li>
                <li>
                  <a href="/about">{t("header.about")}</a>
                </li>

                <button className="language-btn" onClick={handleLanguage}>
                  <FontAwesomeIcon icon={faGlobe} /> &nbsp;
                  {language}
                </button>
              </ul>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
  
    <div
      className={
        isVideos ? "header-container" : "header-container header-border"
      }
    >
      <div className="logo">
        <a href="/">
        <ReactLogo className="logo-img"></ReactLogo>
        </a>
      </div>
      <ul className={isAnimated ? "header-list" : "header-list"}>
        <li>
          <a href="/">{t("header.home")}</a>
        </li>
        <li className="dropdown-wrapper">
          <a href="#" className="dropdown-btn">
            {t("header.videos")}&nbsp;˅
          </a>
          <ul className="dropdown">
            <li>
              <a href="/videos">{t("header.media")}</a>
            </li>
            <li>
              <a href="/images">{t("header.images")}</a>
            </li>
          </ul>
        </li>
        <li className="dropdown-wrapper">
          <a href="#" className="dropdown-btn">
            {t("header.roaster")}&nbsp;˅
          </a>
          <ul className="dropdown">
            <li>
              <a href="/driftcrew">{t("home.drift1")}</a>
            </li>
            <li>
              <a href="/rpcrew">{t("home.race1")}</a>
            </li>
          </ul>
        </li>
        <li>
          {" "}
          <a href="/cars">{t("header.cars")}</a>
        </li>
        <li>
          <a href="/about">{t("header.about")}</a>
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
