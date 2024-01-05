import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import charImg from "../Assets/AVATAR/Divov1.webp";
import { useTranslation } from "react-i18next";

const JayJ = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        image={charImg}
        color="#fc14ff"
        contentDescription={t("wiki.description")}
        description={t("jayj.description")}
        charname="Jay Jefferson"
        nickname="Divoras"
        active={t("status.status1")}
        birthday="2000"
        aliases1="Rusha"
        age="24"
        birthplace="Chicago"
        nationality={t("status.nationality1")}
        gender={t("status.gender1")}
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default JayJ;
