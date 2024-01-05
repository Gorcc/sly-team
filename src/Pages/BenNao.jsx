import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/Reikiv1.webp";
import { useTranslation } from "react-i18next";

const BenNao = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={charImg}
        color="#fa6f06"
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
        contentInfo={t("wiki.11")}
        contentGoals={t("wiki.12")}
        charname="Ben Nao Kylian"
        nickname="Reiki"
        apperance={t("bennao.1")}
        hobbies={t("bennao.2")}
        traits={t("bennao.3")}
        life={t("bennao.4")}
        family={t("bennao.5")}
        education={t("bennao.6")}
        love={t("bennao.7")}
        buisness={t("bennao.8")}
        culture={t("bennao.9")}
        reason={t("bennao.10")}
        goals={t("bennao.12")}
        active={t("status.status1")}
        birthday="2002"
        aliases1="Deez"
        age="22"
        birthplace="Tokyo"
        nationality={t("status.nationality2")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default BenNao;
