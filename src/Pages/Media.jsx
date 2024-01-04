import React from "react";
import "../Styles/Media.scss";
import Transition from "../transitions/transition";
import Layer1 from "../Cars/C35/1.png";
import Layer2 from "../Cars/C35/2.png";
import Layer3 from "../Cars/C35/4.png";
import Layer4 from "../Cars/C35/5.jpg";
import Header from "../Components/Header";
import Mazda1 from "../Cars/MAZDA/1.png";
import Mazda2 from "../Cars/MAZDA/2.png";
import Mazda3 from "../Cars/MAZDA/MAZDA MFC.png";
import Mazda4 from "../Cars/MAZDA/retro.png";
import Elegy1 from "../Cars/ELEGY/1.png";
import Elegy2 from "../Cars/ELEGY/2.png";
import Elegy3 from "../Cars/ELEGY/3.png";
import Elegy4 from "../Cars/ELEGY/4.jpg";
import Roxanne1 from "../Cars/ROXANNE1/1.png";
import Roxanne2 from "../Cars/ROXANNE1/2.png";
import Roxanne3 from "../Cars/ROXANNE1/3.png";
import Roxanne4 from "../Cars/ROXANNE1/retro.jpg";
import Roxanne5 from "../Cars/ROXANNE1/Roxanne_v1.png";
import Cefiro1 from "../Cars/CEFIRO/1.png";
import Cefiro2 from "../Cars/CEFIRO/2.png";
import Cefiro3 from "../Cars/CEFIRO/3.png";
import Cefiro4 from "../Cars/CEFIRO/retro.jpg";
import S14_1 from "../Cars/S14/1.png";
import S14_2 from "../Cars/S14/2.png";
import S14_3 from "../Cars/S14/3.png";
import S14_4 from "../Cars/S14/4.jpg";
import Ferocid1 from "../Cars/FEROCID1/1.png";
import Ferocid2 from "../Cars/FEROCID1/2.png";
import Ferocid3 from "../Cars/FEROCID1/3.png";
import Ferocid4 from "../Cars/FEROCID1/4.png";
import Ferocid5 from "../Cars/FEROCID1/Snapinsta.app_382580254_18249221269204826_8876773228034451616_n_1080.jpg";
import Vincet1 from "../Cars/VINCENT1/1.png";
import Vincet2 from "../Cars/VINCENT1/2.png";
import Vincet3 from "../Cars/VINCENT1/3.png";
import Chaser1 from "../Cars/CHASER/1.png";
import Chaser2 from "../Cars/CHASER/2.png";
import Chaser3 from "../Cars/CHASER/JZX 100 v1.png";
import Chaser4 from "../Cars/CHASER/retro.jpg";
import Vincet4 from "../Cars/VINCENT1/4.png";
import ModalImage from "react-modal-image";
import Supra1 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_16.59.15.40.png";
import Supra2 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_16.59.54.96.png";
import Supra3 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_17.00.08.11.png";
import Supra4 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_16.59.15.40.png";
import Supra5 from "../Cars/Supra/v1.png";
import Supra6 from "../Cars/Supra/v3.png";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Media = () => {
  const [language, setLanguage] = useState("en");
  const [t, i18n] = useTranslation("global");
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  const handleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const [showModal, setShowModal] = useState(false);
  const [showModalImg, setShowModalImg] = useState("");
  const handleClick = (event) => {
    const src = event.target.src;
    setShowModalImg(src);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <Transition>
      <Header></Header>
      <div className="media-container">
        <div className="media-div">
          <div className="media-right">
            <h1>Jester 5 </h1>
            <p>{t("cars.SUPRA")}</p>
          </div>
          <div className="media-left">
            <div className="images">
              
              <div className="three-image">
              <img src={Supra6} className="long-img" alt="" />
              <div className="two-image">
              <img  src={Supra1} alt="" />
              <img src={Supra3} alt="" />
              </div>
             
              </div>
              <img className="full-img" src={Supra5} alt="" />
              
            </div>
          </div>
        </div>
        <div className="media-div">
          <div className="media-left">
            <div className="images">
              <img onClick={handleClick} src={Layer1} alt="" />
              <img src={Layer2} alt="" />
              <img className="full-img" src={Layer3} alt="" />
            </div>
          </div>
          <div className="media-right">
            <h1>Nissan Laurel C35</h1>
            <p>{t("cars.C35")}</p>
          </div>
        </div>

        <div className="media-div">
          <div className="media-right">
            <h1>Mazda RX-7 FC </h1>
            <p>{t("cars.MAZDA")}</p>
          </div>
          <div className="media-left">
            <div className="images">
              <img src={Mazda2} alt="" />
              <img src={Mazda1} alt="" />
              <img src={Mazda3} alt="" />
              <img src={Mazda4} alt="" />
            </div>
          </div>
        </div>

        <div className="media-div">
          <div className="media-left">
            <div className="images">
              <img src={Elegy4} alt="" className="full-img" />

              <img src={Elegy1} alt="" />
              <img src={Elegy2} alt="" />
              <img className="full-img" src={Elegy3} alt="" />
            </div>
          </div>
          <div className="media-right">
            <h1>Elegy RH7 (Lore Friendly)</h1>
            <p>{t("cars.ELEGY")}</p>
          </div>
        </div>

        <div className="media-div">
          <div className="media-right">
            <h1>Roxanne (Lore Friendly)</h1>
            <p>{t("cars.ROXANNE")}</p>
          </div>
          <div className="media-left">
            <div className="images">
              <img src={Roxanne1} alt="" />
              <img src={Roxanne2} alt="" />
              <img className="full-img" src={Roxanne3} alt="" />
              <img className="" src={Roxanne4} alt="" />
              <img className="" src={Roxanne5} alt="" />
            </div>
          </div>
        </div>

        <div className="media-div">
          <div className="media-left">
            <div className="images">
              <img src={Cefiro4} className="full-img" alt="" />

              <img src={Cefiro1} alt="" />
              <img src={Cefiro3} alt="" />
              <img className="full-img" src={Cefiro2} alt="" />
            </div>
          </div>
          <div className="media-right">
            <h1>Nissan Cefiro A31</h1>
            <p>{t("cars.CEFIROO")}</p>
          </div>
        </div>

        <div className="media-div">
          <div className="media-right">
            <h1>Nissan Slyvia S14</h1>
            <p>{t("cars.S14")}</p>
          </div>
          <div className="media-left">
            <div className="images">
              <img src={S14_3} className="full-img" alt="" />
              <img src={S14_1} alt="" />
              <img src={S14_2} alt="" />
              <img className="full-img" src={S14_4} alt="" />
            </div>
          </div>
        </div>
        <div className="media-div">
          <div className="media-left">
            <div className="images">
              <img className="full-img" src={Ferocid2} alt="" />

              <img src={Ferocid5} className="full-img" alt="" />
              <img src={Ferocid4} className="full-img" alt="" />
              <img src={Ferocid3} alt="" className="full-img" />
            </div>
          </div>
          <div className="media-right">
            <h1>Ferocid (Lore Friendly)</h1>
            <p>{t("cars.FEROCID")}</p>
          </div>
        </div>
        <div className="media-div">
        <div className="media-right">
            <h1>
              Toyota Chaser JZX <br /> (Custom Body Kit.)
            </h1>
            <p>{t("cars.CHASER")}</p>
          </div>
          <div className="media-left">
            <div className="images">
              
              <img className="full-img" src={Chaser4} alt="" />
              <img src={Chaser1} alt="" />
              <img src={Chaser2} alt="" />
              <img className="full-img" src={Chaser3} alt="" />
            </div>
          </div>
          
        </div>
        <div className="media-div">
        
          <div className="media-left">
            <div className="images">
              <img src={Vincet1} alt="" />
              <img src={Vincet2} alt="" />
              <img className="full-img" src={Vincet4} alt="" />
            </div>
          </div>
          <div className="media-right">
            <h1>Vincent (Retired)</h1>
            <p>{t("cars.VINCENT")}</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Transition>
  );
};

export default Media;
