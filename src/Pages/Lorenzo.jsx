import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import LorenzoImg from "../Assets/AVATAR/Lorenzov1.webp";
import { useTranslation } from "react-i18next";

const Lorenzo = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={LorenzoImg}
        color="#8642da"
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
        contentInfo={t("wiki.11")}
        contentGoals={t("wiki.12")}
        charname="Lorenzo"
        nickname="Midorin"
        apperance={t("lorenzo.1")}
        hobbies={t("lorenzo.2")}
        fears={t("lorenzo.fear")}
        traits={t("lorenzo.3")}
        negative={t("lorenzo.negative")}
        life={t("lorenzo.4")}
        family={t("lorenzo.5")}
        education={t("lorenzo.6")}
        love={t("lorenzo.7")}
        buisness={t("lorenzo.8")}
        culture={t("lorenzo.9")}
        illegal={t("lorenzo.illegal")}
        reason={t("lorenzo.10")}
        info={t("lorenzo.11")}
        goals={t("lorenzo.12")}
        active={t("status.status1")}
        birthday="1996"
        aliases1="Ren"
        aliases2="Eazy"
        age="28"
        birthplace="Compton"
        nationality={t("status.nationality1")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Lorenzo;
