import React from "react";
import TurkishFlag from "../Assets/flag-tr-svgrepo-com.svg";
import GBFlag from "../Assets/flag-gb-svgrepo-com.svg";
import RUFlag from "../Assets/flag-ru-svgrepo-com.svg";
import USFlag from "../Assets/flag-us-svgrepo-com (1).svg";
import hTuneImg from "../Assets/DRIFTCREW/hTune (Member)/3a9873f8b2084f85a0aea09d45ed36e7.webp";
import SlyLogo from "../Assets/sneeky.webp";
import POFlag from "../Assets/flag-for-flag-portugal-svgrepo-com.svg";
import LorenzoImg from "../Assets/DRIFTCREW/Midorin (Leader)/5346t354f.webp";
import ThetImg from "../Assets/DRIFTCREW/thh (Management)/artworks-bJqqVmljhNvBP3te-dyyrLQ-t500x500.webp";
import RyuImg from "../Assets/DRIFTCREW/Ryujin (Management)/wp2307777-chinese-dragons-wallpapers.webp";
import KaiImg from "../Assets/DRIFTCREW/Kaimour (Management)/kaim.webp";
import HaktanImg from "../Assets/DRIFTCREW/Haktan (Member)/indir_3.webp";
import GhostImg from "../Assets/DRIFTCREW/Ghost (Member)/HD-wallpaper-new-day-new-life-araba-autos-drift-gtr-nissan-nissan-gtr.webp";
import OrionImg from "../Assets/DRIFTCREW/Orion (Member)/738f0a47122f3313acd6563229edf29c.webp";
import DivoImg from "../Assets/DRIFTCREW/Divoras (Trainee)/310021024_126077533548688_2289519022195121439_n.webp";
import MordredImg from "../Assets/DRIFTCREW/Mordred (Trainee)/desktop-wallpaper-sebastia-vettel-poster-motorsport-f1-sebastianvettel.webp";
import ProxImg from "../Assets/DRIFTCREW/Proximtas (Trainee/IMG_1765.webp";
import LerbImg from "../Assets/DRIFTCREW/Lerbtw (Trainee)/4212WaoIZZk.webp";
import mxviImg from "../Assets/DRIFTCREW/pppp.webp"
import SamaImg from "../Assets/sama.png"
import "../Styles/DriftCrew.scss";
import BRflag from "../Assets/flag-for-flag-bulgaria-svgrepo-com.svg"

const DriftCrew = () => {
  return (
    <div className="dcrew-container">
      <h1 className="dcrew-header">Team Leader</h1>

      <div className="leader border-bottom">
        <img src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/sly-team/2dd90257b3aef2af441cc529f7ade404.png" className="drift-img" alt="" />
        <div className="d-info">
          <img src={SlyLogo} className="logo-img" alt="" />
          <h1>Midorin</h1>
          <img src={TurkishFlag}   className="logo-img"alt="" />
        </div>
      </div>
      <h1 className="dcrew-header">Management</h1>
      <div className="management border-bottom">
      <div className="member">
          <img src={HaktanImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Haktan</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
       
       
      </div>
      <h1 className="dcrew-header">Team Members</h1>
      <div className="team-members border-bottom">
      <div className="member">
          <img src={RyuImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Ryujin</h1>
            <img  className="logo-img" src={GBFlag} alt="" />
          </div>
        </div>
        <div className="member">
          <img src="https://github.com/Gorcc/cdn/blob/main/sly-team/mord.png?raw=true" className="drift-img mordred-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Mordred</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
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
          <img src={OrionImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Orion</h1>
            <img  className="logo-img" src={USFlag} alt="" />
          </div>
        </div>
        <div className="member ">
          <img src={mxviImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>MSxVI</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
        {/* Remove Sama */}
        {/* <div className="member">
          <img src={SamaImg} className="drift-img" alt="" />
          <div className="d-info">
            <img  className="logo-img" src={SlyLogo} alt="" />
            <h1>Sama</h1>
            <img  className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div> */}
        {/* Add VolkotsV2 */}
        <div className="member">
          <img src="https://github.com/Gorcc/cdn/blob/main/sly-team/pp_buu.png?raw=true" className="drift-img" alt="VolkotsV2" />
          <div className="d-info">
            <img className="logo-img" src={SlyLogo} alt="" />
            <h1>VolkotsV2</h1>
            <img className="logo-img" src={TurkishFlag} alt="" />
          </div>
        </div>
        
      </div>
      <h1 className="dcrew-header ">Designer</h1>
      <div className="designer border-bottom">
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
          <img src="https://cdn.jsdelivr.net/gh/Gorcc/cdn@main/sly-team/2dd90257b3aef2af441cc529f7ade404.png" className="drift-img" alt="" />
          <h1>Midorin</h1>
        </div>
      </div>
    </div>
  );
};

export default DriftCrew;
