import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/Proxiv1.webp";
import { useTranslation } from "react-i18next";

const Carter = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={charImg}
        color="#39b7b8"
        contentDescription={t("wiki.description")}
        description={t("carter.description")}
        charname="Carter"
        nickname="Proximtas"
        active1={t("status.status2")}
        birthday="1998"
        aliases1="Proxy"
        age="26"
        birthplace="Buenos Aires"
        nationality="Latin/American"
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Carter;
