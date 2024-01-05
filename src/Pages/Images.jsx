import React from "react";
import "../Styles/Images.scss";
import Header from "../Components/Header";
import Image1 from "../Assets/Images/5.9.2023 Practicing at Red Rock in Drift server/image (1).png";
import Image2 from "../Assets/Images/5.9.2023 Practicing at Red Rock in Drift server/image.png";
import Image3 from "../Assets/Images/15.10.2023 Hanging out/132FD123SACXZ.png";
import Image4 from "../Assets/Images/15.10.2023 Hanging out/image (2).png";
import Image5 from "../Assets/Images/15.10.2023 Hanging out/image (5).png";
import Image6 from "../Assets/Images/16.11.2023 Ren's Birthday drifting at night/chaseredit.png";
import Image7 from "../Assets/Images/16.11.2023 Ren's Birthday drifting at night/image.png";
import Image8 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (1).png";
import Image9 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (2).png";
import Image10 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (3).png";
import Image11 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (4).png";
import Image12 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (5).png";
import Image13 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (6).png";
import Image14 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (7).png";
import Image15 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (8).png";
import Image16 from "../Assets/Images/2023 Ocak, Race meeting/Desktop_Screenshot_2023.03.17_-_00.14.43.44.png";
import Image17 from "../Assets/Images/2023 Ocak, Race meeting/image (1).png";
import Image18 from "../Assets/Images/2023 Ocak, Race meeting/imagesa.png";
import Image19 from "../Assets/Images/Ağustos Tandem Practice in Drift Server/image (3).png";
import Image20 from "../Assets/Images/Ağustos Tandem Practice in Drift Server/image.png";
import Image21 from "../Assets/Images/Ekim 2023 Race 2/image (1).png";
import Image22 from "../Assets/Images/Ekim 2023 Race 2/image (2).png";
import Image23 from "../Assets/Images/Ekim 2023 Race 2/image.png";
import Image24 from "../Assets/Images/Ekim 2023 Race and later on in the club/image (1).png";
import Image25 from "../Assets/Images/Ekim 2023 Race and later on in the club/image (6).png";
import Image26 from "../Assets/Images/Ekim 2023 Race and later on in the club/image.png";
import Image27 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/Desktop_Screenshot_2023.06.03_-_16.57.47.13.png";
import Image28 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/Desktop_Screenshot_2023.06.15_-_16.54.44.14.png";
import Image29 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/Desktop_Screenshot_2023.png";
import Image30 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/hondansx8edit.png";
import Image31 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/left.png";
import Image32 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/loid2.png";
import Image33 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/rain5.png";
import Image34 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/rian2.png";
import Image35 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/rian4.png";
import Image36 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/Screenshot_3.png";
import Image37 from "../Assets/Images/Mayıs Pull over by the cops during Tandem in the streets/dd.png";
import Image38 from "../Assets/Images/Mayıs Pull over by the cops during Tandem in the streets/image (2).png";
import Image39 from "../Assets/Images/Mayıs Pull over by the cops during Tandem in the streets/image.png";
import Image40 from "../Assets/Images/Racing Gather/image (1).png";
import Image41 from "../Assets/Images/Racing Gather/image (2).png";
import Image42 from "../Assets/Images/Racing Gather/image (3).png";
import Image43 from "../Assets/Images/Racing Gather/image (4).png";
import Image44 from "../Assets/Images/Racing Gather/image (5).png";
import Image45 from "../Assets/Images/Racing Gather/image.png";
import Image46 from "../Assets/Images/Şubat 2023 , Casually cruisin/352423542543.png";
import Image47 from "../Assets/Images/Şubat 2023 , Casually cruisin/523453425243efso.png";
import Image48 from "../Assets/Images/Şubat 2023 , Casually cruisin/867345786354.png";
import Image49 from "../Assets/Images/Şubat 2023 , Casually cruisin/brrr.png";
import Image50 from "../Assets/Images/Şubat 2023 , Casually cruisin/Desktop_Screenshot_2023.png";
import Image51 from "../Assets/Images/Temmuz 2023 Tandem practice in RP/image (3).png";
import Image52 from "../Assets/Images/Temmuz 2023 Tandem practice in RP/image (7).png";
import Image53 from "../Assets/Images/Temmuz 2023 Tandem practice in RP/image.png";
import Image54 from "../Assets/Images/Temmuz in the playground Tandem Practice in RP/111.png";
import Image55 from "../Assets/Images/Temmuz in the playground Tandem Practice in RP/222.png";
import { useState } from "react";

import Transition from "../transitions/transition";

const Images = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <Transition>
      <>
        <Header></Header>
        {loading && (
          <div className="loading">
            <h1>Loading Images</h1>
            <div class="lds-hourglass"></div>
          </div>
        )}
        <div className={`images-container ${loading ? "hidden" : ""}`}>
          <h1>IMAGES</h1>
          <div className="img-div">
            <h3 className="img-header">Practice at Red Rock</h3>
            <div className="images-wrap">
              <img src={Image2} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image1} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Hanging Out</h3>
            <div className="images-wrap">
              <img src={Image3} className="full-img border" alt="" onLoad={handleImageLoad} />
              <img src={Image4} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image5} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header">Ren's Birthday Drifting at Night</h3>
            <div className="images-wrap">
              <img src={Image6} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image7} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Mandem Gathering</h3>
            <div className="images-wrap">
              <img src={Image16} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image9} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image15} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image11} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image12} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image13} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image14} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image8} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header">Race Meeting</h3>
            <div className="images-wrap">
              <img src={Image18} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Tandem Practice</h3>
            <div className="images-wrap">
              <img src={Image19} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image20} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header">Race 2</h3>
            <div className="images-wrap">
              <img src={Image21} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image23} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Race & Club</h3>
            <div className="images-wrap">
              <img src={Image24} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image25} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image26} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header">Freestyle & Tandem in Drift Server</h3>
            <div className="images-wrap">
              <img src={Image27} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image28} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image29} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image30} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image31} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Before Race Meeting</h3>
            <div className="images-wrap">
              <img src={Image32} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image33} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image34} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image35} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image36} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header">Pullover by the Cops During Tandem</h3>
            <div className="images-wrap">
              <img src={Image37} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image38} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image39} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Racing Gather</h3>
            <div className="images-wrap">
              <img src={Image43} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image44} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image45} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header">Casually Cruisin</h3>
            <div className="images-wrap">
              <img src={Image50} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image47} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image48} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image49} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image46} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">Tandem Practice in RP</h3>
            <div className="images-wrap">
              <img src={Image51} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image53} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <h3 className="img-header header-right">
              Playground, Tandem Practice
            </h3>
            <div className="images-wrap">
              <img src={Image54} className="full-img" alt="" onLoad={handleImageLoad} />
              <img src={Image55} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
        </div>
      </>
    </Transition>
  );
};

export default Images;
