import React from "react";
import VideoBg from "../Assets/herovid.mp4";
import otherBg from "../Assets/ha.mp4"
import { useState, useEffect } from "react";
import "../Styles/Hero.scss";

const Hero = () => {
  const Texts = [
    "Welcome to Team Sly Website",
    "Learn More About Us",
    "Team Members",
  ];
  const BtnTexts = ["About Us", "Blabla", "Button"];
  const [contentIndex, setContentIndex] = useState(0);
  const [btnIndex, setbtnIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % Texts.length);
      setbtnIndex((prevIndex) => (prevIndex + 1) % BtnTexts.length);
      setAnimate(true);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [contentIndex, Texts.length]);

  const onAnimationEnd = () => {
    setAnimate(false);
  };

  return (
    <div className="main">
      <video src={VideoBg} autoPlay loop muted></video>
      <div
        className={`content ${animate ? "animate" : ""}`}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="content-wrap">
          <h1>{Texts[contentIndex]}</h1>
          <button>{BtnTexts[btnIndex]}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
