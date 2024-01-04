import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import RianImg from "../Assets/AVATAR/Thettv1.png";
import Wiki from "../Components/Wiki";
import Transition from "../transitions/transition";
import { useTranslation } from "react-i18next";

const Rian = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <Transition>
      <Header></Header>
      <Wiki
        blur={true}
        image={RianImg}
        color="#fa6f06"
        contentApperance={t("wiki.1")}
        contentHobbies={t("wiki.2")}
        contentTraits={t("wiki.3")}
        contentLife={t("wiki.4")}
        contentCulture={t("wiki.9")}
        contentGoals={t("wiki.12")}
        charname="Rian"
        nickname="thet"
        apperance={t("dave.1")}
        hobbies={t("dave.2")}
        fears={t("dave.fear")}
        traits={t("dave.3")}
        negative={t("dave.negative")}
        goals={t("dave.12")}
   
        active1="Coma (Car Crash)"
        birthday="2004"
        aliases1="Ghost"
        age="19"
        birthplace="Osaka"
        nationality="Japan"
        gender="Male"
      ></Wiki>
      <Footer></Footer>
    </Transition>
  );
};

export default Rian;
