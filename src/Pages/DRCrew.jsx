import React from "react";
import "../Styles/RPCrew.scss";
import Transition from "../transitions/transition";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import DriftCrew from "../Components/DriftCrew";

const DRCrew = () => {
  return (
    <>
    <Header></Header>
    <Transition>
     
      <DriftCrew></DriftCrew>
      <Footer></Footer>
    </Transition>
    </>
  );
};

export default DRCrew;
