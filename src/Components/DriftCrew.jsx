import React from "react";
import TurkishFlag from "../Assets/flag-tr-svgrepo-com.svg";
import GBFlag from "../Assets/flag-gb-svgrepo-com.svg";
import RUFlag from "../Assets/flag-ru-svgrepo-com.svg";
import USFlag from "../Assets/flag-us-svgrepo-com (1).svg";
import hTuneImg from "../Assets/DRIFTCREW/hTune (Member)/3a9873f8b2084f85a0aea09d45ed36e7.png";
import SlyLogo from "../Assets/sneeky.webp";
import POFlag from "../Assets/flag-for-flag-portugal-svgrepo-com.svg";
import LorenzoImg from "../Assets/DRIFTCREW/Midorin (Leader)/5346t354f.png";
import ThetImg from "../Assets/DRIFTCREW/thh (Management)/artworks-bJqqVmljhNvBP3te-dyyrLQ-t500x500.jpg";
import RyuImg from "../Assets/DRIFTCREW/Ryujin (Management)/wp2307777-chinese-dragons-wallpapers.jpg";
import KaiImg from "../Assets/DRIFTCREW/Kaimour (Management)/kaim.jpg";
import HaktanImg from "../Assets/DRIFTCREW/Haktan (Member)/indir_3.jpg";
import GhostImg from "../Assets/DRIFTCREW/Ghost (Member)/HD-wallpaper-new-day-new-life-araba-autos-drift-gtr-nissan-nissan-gtr.png";
import OrionImg from "../Assets/DRIFTCREW/Orion (Member)/738f0a47122f3313acd6563229edf29c.png";
import DivoImg from "../Assets/DRIFTCREW/Divoras (Trainee)/310021024_126077533548688_2289519022195121439_n.png";
import MordredImg from "../Assets/DRIFTCREW/Mordred (Trainee)/desktop-wallpaper-sebastia-vettel-poster-motorsport-f1-sebastianvettel.jpg";
import ProxImg from "../Assets/DRIFTCREW/Proximtas (Trainee/IMG_1765.jpg";
import LerbImg from "../Assets/DRIFTCREW/Lerbtw (Trainee)/4212WaoIZZk.jpg";

import "../Styles/DriftCrew.scss";

const DriftCrew = () => {
  return (
    <div className="dcrew-container">
      <h1 className="dcrew-header">Team Leader</h1>

      <div className="leader">
        <img src={LorenzoImg} className="drift-img" alt="" />
        <div className="d-info">
          <img src={SlyLogo} className="logo-img" alt="" />
          <h1>Midorin</h1>
          <img src={TurkishFlag}   className="logo-img"alt="" />
        </div>
      </div>
      <h1 className="dcrew-header">Management</h1>
      <div className="management">
       
        <div className="member">
          <img src={RyuImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Ryujin</h1>
            <img  className="logo-img" src={GBFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img src={ThetImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Thet</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img  src={KaiImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Kaimour</h1>
            <img  className="logo-img" src={GBFlag} alt="" />
          </div>
        </div>
      </div>
      <h1 className="dcrew-header">Team Members</h1>
      <div className="team-members">
        <div className="member">
          <img src={hTuneImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>hTune</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
       
        <div className="member">
          <img src={GhostImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Ghost</h1>
            <img  className="logo-img" src={POFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img src={HaktanImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Haktan</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img src={OrionImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Orion</h1>
            <img  className="logo-img" src={USFlag} alt="" />
          </div>
        </div>
        
      </div>
      <h1 className="dcrew-header ">Team Trainees</h1>
      <div className="team-trainees border-bottom">
        <div className="member">
          <img src={DivoImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Divoras</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img src={MordredImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Mordred</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img src={LerbImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Lerbtw</h1>
            <img  className="logo-img" src={RUFlag} alt="" />
          </div>
        </div>
        <div className="member ">
          <img src={ProxImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Proximtas</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
     
      </div>
      <h1 className="dcrew-header">Designer</h1>
      <div className="designer">
        <div className="member">
          <img src={DivoImg} className="drift-img" alt="" />
          <h1>Divoras</h1>
        </div>
      </div>
      <h1 className="dcrew-header">Editors</h1>
      <div className="editors">
        <div className="member">
          <img src={ThetImg} className="drift-img" alt="" />
          <h1>Thet</h1>
        </div>
        <div className="member">
          <img src={LorenzoImg} className="drift-img" alt="" />
          <h1>Midorin</h1>
        </div>
      </div>
    </div>
  );
};

export default DriftCrew;
