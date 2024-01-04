import React from "react";
import "../Styles/About.scss";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Transition from "../transitions/transition";

const About = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
        <Header></Header>
    <div className="about-container">
        
      <h1>{t("about.header")}</h1>
      <p>{t("about.about")}</p>
     
    </div>
    <Footer className="bottom-page"></Footer>
    </Transition>
  );
};

export default About;
