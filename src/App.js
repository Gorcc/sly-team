import logo from "./logo.svg";
import "./App.css";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Trailers from "./Components/Trailers";
import TeamRoster from "./Components/TeamRoster";
import Homepage from "./Pages/Homepage";
import RPCrew from "./Pages/RPCrew";
import Images from "./Pages/Images";
import { AnimatePresence } from "framer-motion";

import { Routes, Route, useLocation } from "react-router-dom";
import Media from "./Pages/Media";
import DRCrew from "./Pages/DRCrew";
import Lorenzo from "./Pages/Lorenzo";
import Dave from "./Pages/Dave";
import Videos from "./Pages/Videos";
import About from "./Pages/About";
import Rian from "./Pages/Rian";
import Tyrone from "./Pages/Tyrone";
import Dante from "./Pages/Dante";
import Loid from "./Pages/Loid";
import BenNao from "./Pages/BenNao";
import Carter from "./Pages/Carter";
import Russel from "./Pages/Russel";
import JayJ from "./Pages/JayJ";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/cars" element={<Media />} />
        <Route path="/images" element={<Images />} />
        <Route path="/rpcrew" element={<RPCrew />} />
        <Route path="/driftcrew" element={<DRCrew />} />
        <Route path="/lorenzo" element={<Lorenzo />} />
        <Route path="/dave" element={<Dave />} />
        <Route path="/rian" element={<Rian />} />
        <Route path="/tyrone" element={<Tyrone />} />
        <Route path="/dante" element={<Dante />} />
        <Route path="/loid" element={<Loid />} />
        <Route path="/bennao" element={<BenNao />} />
        <Route path="/carter" element={<Carter />} />
        <Route path="/jayj" element={<JayJ />} />
        <Route path="/russel" element={<Russel />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
