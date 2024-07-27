import React, { useState, useEffect } from "react";
import "../App.css";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Trailers from "../Components/Trailers";
import Blog from "../Components/Blog";
import SocialLinks from "../Components/SocialLinks";
import Logo from "../Assets/sneeky.webp"

// Import JSON files directly
const enData = require("../translations/en/global.json");
const trData = require("../translations/tr/globa.json");


function Homepage() {

  const [isSiteDone,setIsSiteDone] = useState(true)
  return (
    <>
      {isSiteDone ? (
        <>
          <Header />
          <Hero />
          <Trailers />
          <Blog />
          <SocialLinks />
          <Footer />
        </>
      ) : (
        <div className="updating-website">
        <h1 className="">We are currently updating our website.</h1>
        <img src={Logo} alt="Sly Logo" />
        </div>
      )}
    </>
  );
}
export default Homepage;
