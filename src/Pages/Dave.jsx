import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DaveImg from "../Assets/AVATAR/Thetv1.webp";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import { useTranslation } from "react-i18next";

const Dave = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={DaveImg}
        color="#fa6f06"
        contentApperance={t("wiki.1")}
        contentHobbies={t("wiki.2")}
        contentTraits={t("wiki.3")}
        contentLife={t("wiki.4")}
        contentCulture={t("wiki.9")}
        contentGoals={t("wiki.12")}
        charname="Dave"
        nickname="thet"
        apperance={t("dave.1")}
        hobbies={t("dave.2")}
        fears={t("dave.fear")}
        traits={t("dave.3")}
        culture={t("dave.9")}
        negative={t("dave.negative")}
        goals={t("dave.12")}
        active={t("status.status1")}
        birthday="1999"
        aliases1="Sneeky"
        age="25"
        birthplace="San Bernardino"
        nationality={t("status.nationality1")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Dave;
