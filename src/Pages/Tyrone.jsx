import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/Mordredv1.webp";
import { useTranslation } from "react-i18next";

const Tyrone = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <Header></Header>
      <Transition>
        <Wiki
          image={charImg}
          color="#c00000"
          contentApperance={t("wiki.1")}
          contentHobbies={t("wiki.2")}
          contentTraits={t("wiki.3")}
          contentLife={t("wiki.4")}
          contentFamily={t("wiki.5")}
          contentEducation={t("wiki.6")}
          contentLove={t("wiki.7")}
          contentBuisness={t("wiki.8")}
          contentCulture={t("wiki.9")}
          contentillegal={t("wiki.illegal")}
          contentReason={t("wiki.10")}
          contentGoals={t("wiki.12")}
          charname="Tyrone"
          nickname="Mordred"
          apperance={t("tyrone.1")}
          hobbies={t("tyrone.2")}
          traits={t("tyrone.3")}
          life={t("tyrone.4")}
          family={t("tyrone.5")}
          education={t("tyrone.6")}
          love={t("tyrone.7")}
          buisness={t("tyrone.8")}
          culture={t("tyrone.9")}
          illegal={t("tyrone.illegal")}
          reason={t("tyrone.10")}
          goals={t("tyrone.12")}
          active={t("status.status1")}
          birthday="1998"
          aliases1="T1"
          age="26"
          birthplace="East Compton"
          nationality={t("status.nationality1")}
          gender={t("status.gender1")}
        ></Wiki>
        <Footer></Footer>
      </Transition>
    </>
  );
};

export default Tyrone;
