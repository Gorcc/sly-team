import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/Dante1.webp";
import { useTranslation } from "react-i18next";

const Dante = () => {
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
        contentGoals={t("wiki.12")}
        charname="Dante"
        nickname="Haktan"
        apperance={t("dante.1")}
        hobbies={t("dante.2")}
        traits={t("dante.3")}
        life={t("dante.4")}
        family={t("dante.5")}
        education={t("dante.6")}
        love={t("dante.7")}
        buisness={t("dante.8")}
        culture={t("dante.9")}
        reason={t("dante.10")}
        goals={t("dante.12")}
        active={t("status.status1")}
        birthday="-"
        aliases1="RB9"
        age="-"
        birthplace="Philadelphia"
        nationality={t("status.nationality1")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Dante;
