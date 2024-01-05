import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/Htunev1.webp";
import { useTranslation } from "react-i18next";

const Loid = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={charImg}
        color="#4650ff"
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
        contentGoals={t("wiki.12")}
        charname="Loid"
        nickname="hTune"
        apperance={t("loid.1")}
        hobbies={t("loid.2")}
        traits={t("loid.3")}
        life={t("loid.4")}
        family={t("loid.5")}
        education={t("loid.6")}
        love={t("loid.7")}
        buisness={t("loid.8")}
        culture={t("loid.9")}
        reason={t("loid.10")}
        goals={t("loid.12")}
        active={t("status.status1")}
        birthday="2003"
        aliases1="LS"
        age="21"
        birthplace="Osaka"
        nationality={t("status.nationality2")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Loid;
