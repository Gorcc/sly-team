import React, { useState, useEffect } from "react";
import "../App.css";
import Hero from "../Components/Hero";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Trailers from "../Components/Trailers";
import Blog from "../Components/Blog";
import SocialLinks from "../Components/SocialLinks";

// Import JSON files directly
const enData = require("../translations/en/global.json");
const trData = require("../translations/tr/globa.json");

function Homepage() {
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
