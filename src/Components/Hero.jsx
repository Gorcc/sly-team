import React from "react";

import { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import "../Styles/Hero.scss";

const Hero = () => {
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

  const [language, setLanguage] = useState("en");
  const [t, i18n] = useTranslation("global");
  const [isAnimated, setIsAnimated] = useState(false);
  const [page, setPage] = useState("about");

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const Texts = [
    t("home.learn"),
    t("home.check"),
    t("home.race"),
    t("home.drift"),
  ];
  const BtnTexts = [
    t("home.learn1"),
    t("home.check1"),
    t("home.race1"),
    t("home.drift1"),
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const [btnIndex, setbtnIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % Texts.length);
      setbtnIndex((prevIndex) => (prevIndex + 1) % BtnTexts.length);
      setAnimate(true);
      if(isMobile){
        setAnimate(false);
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [contentIndex, Texts.length]);

  const onAnimationEnd = () => {
    setAnimate(false);
  };

  useEffect(() => {
    switch (btnIndex) {
      case 0:
        setPage("about");
        break;
      case 1:
        setPage("cars");
        break;
      case 2:
        setPage("rpcrew");
        break;
      case 3:
        setPage("driftcrew");
        break;
      default:
        setPage("about");
    }
  }, [btnIndex]);
  return (
    <div className="main">
      <iframe
        src="https://www.youtube.com/embed/201n-vCi4IE?si=qETIciP-3zlObzX2&autoplay=1&mute=1&loop=1&playlist=201n-vCi4IE&controls=0&showinfo=0&rel=0&modestbranding=1"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100vw',
          height: '100vh',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: -1
        }}
      ></iframe>
      <div
        className={`content ${animate ? "animate" : ""}`}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="content-wrap">
          <h1>{Texts[contentIndex]}</h1>
          <a href={page}>{BtnTexts[btnIndex]}</a>
        </div>
      </div>
      <h5 className="server-text">
        {t("header.current-server")}&nbsp;<strong>SideAttack</strong>
      </h5>
      <h5 className="server-text">
        {t("header.current-server1")}&nbsp;<strong>Venny Roleplay</strong>
      </h5>
    </div>
  );
};

export default Hero;
