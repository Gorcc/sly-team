import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/russel1.webp";
import { useTranslation } from "react-i18next";

const Russel = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={charImg}
        color="#1b6e00"
        contentApperance={t("wiki.1")}
        contentHobbies={t("wiki.2")}
        contentTraits={t("wiki.3")}
        contentLife={t("wiki.4")}
        contentFamily={t("wiki.5")}
        contentEducation={t("wiki.6")}
        contentLove={t("wiki.7")}
        contentBuisness={t("wiki.8")}
        contentCulture={t("wiki.9")}
        contentReason={t("wiki.10")}
 
        charname="Russel"
        nickname="MSxVI"
        apperance={t("russel.1")}
        hobbies={t("russel.2")}
        traits={t("russel.3")}
        life={t("russel.4")}
        family={t("russel.5")}
        education={t("russel.6")}
        love={t("russel.7")}
        buisness={t("russel.8")}
        culture={t("russel.9")}
        reason={t("russel.10")}
        goals={t("russel.12")}
        
        active1={t("status.status2")}
        birthday="1999"
        aliases1="LG"
        age="25"
        birthplace="Los Santos"
        nationality={t("status.nationality1")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Russel;
