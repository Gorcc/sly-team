import React, { useState, useEffect } from "react";
import "../App.css";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Trailers from "../Components/Trailers";
import Blog from "../Components/Blog";
import SocialLinks from "../Components/SocialLinks";


import enData from "../translations/en/global.json";
import trData from "../translations/tr/globa.json";

function Homepage() {

  const [enDataState, setEnDataState] = useState(null);
  const [trDataState, setTrDataState] = useState(null);

  useEffect(() => {

    setEnDataState(enData);
    setTrDataState(trData);
  }, []);

  if (!enDataState || !trDataState) {
    return <div className="loading"><h2>Loading TEAM SLY...</h2>
    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>;
  }

  return (
    <>
      <Header />
      <Hero />
      <Trailers />
      <Blog />
      <SocialLinks />
      <Footer />
    </>
  );
}

export default Homepage;
