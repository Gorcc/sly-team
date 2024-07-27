import React from "react";
import "../Styles/Media.scss";
import Transition from "../transitions/transition";
import Layer1 from "../Cars/C35/1.webp";
import Layer2 from "../Cars/C35/2.webp";
import Layer3 from "../Cars/C35/4.webp";
import Layer4 from "../Cars/C35/5.webp";
import Header from "../Components/Header";
import Mazda1 from "../Cars/MAZDA/1.webp";
import Mazda2 from "../Cars/MAZDA/2.webp";
import Mazda3 from "../Cars/MAZDA/MAZDA MFC.webp";
import Mazda4 from "../Cars/MAZDA/retro.webp";
import Elegy1 from "../Cars/ELEGY/1.webp";
import Elegy2 from "../Cars/ELEGY/2.webp";
import Elegy3 from "../Cars/ELEGY/3.webp";
import Elegy4 from "../Cars/ELEGY/4.webp";
import Roxanne1 from "../Cars/ROXANNE1/1.webp";
import Roxanne2 from "../Cars/ROXANNE1/2.webp";
import Roxanne3 from "../Cars/ROXANNE1/3.webp";
import Roxanne4 from "../Cars/ROXANNE1/retro.webp";
import Roxanne5 from "../Cars/ROXANNE1/Roxanne_v1.webp";
import Cefiro1 from "../Cars/CEFIRO/1.webp";
import Cefiro2 from "../Cars/CEFIRO/2.webp";
import Cefiro3 from "../Cars/CEFIRO/3.webp";
import Cefiro4 from "../Cars/CEFIRO/retro.webp";
import S14_1 from "../Cars/S14/1.webp";
import S14_2 from "../Cars/S14/2.webp";
import S14_3 from "../Cars/S14/3.webp";
import S14_4 from "../Cars/S14/4.webp";
import Ferocid1 from "../Cars/FEROCID1/1.webp";
import Ferocid2 from "../Cars/FEROCID1/2.webp";
import Ferocid3 from "../Cars/FEROCID1/3.webp";
import Ferocid4 from "../Cars/FEROCID1/4.webp";
import Ferocid5 from "../Cars/FEROCID1/Snapinsta.app_382580254_18249221269204826_8876773228034451616_n_1080.webp";
import Vincet1 from "../Cars/VINCENT1/1.webp";
import Vincet2 from "../Cars/VINCENT1/2.webp";
import Vincet3 from "../Cars/VINCENT1/3.webp";
import Vincet4 from "../Cars/VINCENT1/4.webp";
import Chaser1 from "../Cars/CHASER/1.webp";
import Chaser2 from "../Cars/CHASER/2.webp";
import Chaser3 from "../Cars/CHASER/JZX 100 v1.webp";
import Chaser4 from "../Cars/CHASER/retro.webp";
import ModalImage from "react-modal-image";
import Supra1 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_16.59.15.40.webp";
import Supra2 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_16.59.54.96.webp";
import Supra3 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_17.00.08.11.webp";
import Supra4 from "../Cars/Supra/Desktop_Screenshot_2023.12.27_-_16.59.15.40.webp";
import Supra5 from "../Cars/Supra/v1.webp";
import Supra6 from "../Cars/Supra/v3.webp";
import Footer from "../Components/Footer";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Media = () => {
  const [language, setLanguage] = useState("en");
  const [t, i18n] = useTranslation("global");
  const [isAnimated, setIsAnimated] = useState(false);
  const [bigImage, setBigImage] = useState(false);
  const [clickedImg, setClickedImg] = useState("");

  useEffect(() => {
    setIsAnimated(true);
  }, []);
  const handleLanguage = () => {
    const newLanguage = language === "en" ? "tr" : "en";
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  const handleClick = (event) => {
    const src = event.target.src;
    setBigImage(true);
    setClickedImg(src);
  };
  if (bigImage) {
    document.documentElement.classList.add("no-scroll");
  } else {
    document.documentElement.classList.remove("no-scroll");
  }
  const handleClose = () => {
    setBigImage(false);
  };

  return (
    <>
      <Header></Header>
      <Transition>
        {bigImage ? (
          <div className="fullscreen-img">
            <img src={clickedImg} alt="" />
            <FontAwesomeIcon
              className="close-icon"
              onClick={handleClose}
              icon={faXmark}
            ></FontAwesomeIcon>
          </div>
        ) : (
          ""
        )}
        <div
          className={bigImage ? "media-container opacity" : "media-container"}
        >
          <div className="media-div">
            <div className="media-left">
              <div className="images">
                <div className="three-image">
                  <img
                    onClick={handleClick}
                    src="https://github.com/Gorcc/cdn/blob/main/sly-team/schlagen.png?raw=true"
                    className="full-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="media-right">
              <h1>SCHLAGEN GT (STR)</h1>
              <p>{t("cars.SCHLAGEN")}</p>
            </div>
          </div>
          <div className="media-div">
            <div className="media-right">
              <h1>S230</h1>
              <p>{t("cars.S230")}</p>
            </div>
            <div className="media-left">
              <div className="images">
                <div className="three-image">
                  <img
                    onClick={handleClick}
                    src="https://github.com/Gorcc/cdn/blob/main/sly-team/s230.png?raw=true"
                    className="full-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="media-div">
            <div className="media-left">
              <div className="images">
                <div className="three-image">
                  <img
                    onClick={handleClick}
                    src="https://github.com/Gorcc/cdn/blob/main/sly-team/dominator.png?raw=true"
                    className="full-img"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="media-right">
              <h1>
                Ford Mustang <br /> (Dominator GT)
              </h1>
              <p>{t("cars.DOMINATOR")}</p>
            </div>
          </div>
          <div className="media-div">
            <div className="media-right">
              <h1>Jester 5 </h1>
              <p>{t("cars.SUPRA")}</p>
            </div>
            <div className="media-left">
              <div className="images">
                <div className="three-image">
                  <img
                    onClick={handleClick}
                    src={Supra6}
                    className="long-img"
                    alt=""
                  />
                  <div className="two-image">
                    <img onClick={handleClick} src={Supra1} alt="" />
                    <img onClick={handleClick} src={Supra3} alt="" />
                  </div>
                </div>
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Supra5}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="media-div">
            <div className="media-left">
              <div className="images">
                <img onClick={handleClick} src={Layer1} alt="" />
                <img onClick={handleClick} src={Layer2} alt="" />
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Layer3}
                  alt=""
                />
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
                <img onClick={handleClick} src={Mazda4} alt="" />
                <img onClick={handleClick} src={Mazda1} alt="" />
                <img onClick={handleClick} src={Mazda3} alt="" />

                <img onClick={handleClick} src={Mazda2} alt="" />
              </div>
            </div>
          </div>

          <div className="media-div">
            <div className="media-left">
              <div className="images">
                <img
                  onClick={handleClick}
                  src="https://github.com/Gorcc/cdn/blob/main/sly-team/elegy.png?raw=true"
                  alt=""
                  className="full-img"
                />
                <div className="two-image-side">
                  <img onClick={handleClick} src={Elegy1} alt="" />
                  <img
                    onClick={handleClick}
                    className="small-img"
                    src={Elegy4}
                    alt=""
                  />
                </div>

                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Elegy3}
                  alt=""
                />
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
               
                <img onClick={handleClick} className="full-img" src="https://github.com/Gorcc/cdn/blob/main/sly-team/roxanne1.png?raw=true" alt="" />
                <img onClick={handleClick} className="full-img" src="https://github.com/Gorcc/cdn/blob/main/sly-team/roxanne2.png?raw=true" alt="" />
               
               
                <img onClick={handleClick} className="" src={Roxanne4} alt="" />
                <img onClick={handleClick} className="" src={Roxanne5} alt="" />
              </div>
            </div>
          </div>

          <div className="media-div">
            <div className="media-left">
              <div className="images">
                <img
                  onClick={handleClick}
                  src={Cefiro4}
                  className="full-img"
                  alt=""
                />

                <img onClick={handleClick} src={Cefiro1} alt="" />
                <img onClick={handleClick} src={Cefiro3} alt="" />
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Cefiro2}
                  alt=""
                />
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
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={S14_4}
                  alt=""
                />
                <img onClick={handleClick} src={S14_1} alt="" />
                <img onClick={handleClick} src={S14_2} alt="" />
                <img
                  onClick={handleClick}
                  src={S14_3}
                  className="full-img"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="media-div">
            <div className="media-left">
              <div className="images ferocid-imgs">
                <img
                  onClick={handleClick}
                 
                  src={Ferocid2}
                  alt=""
                />

                <img
                  onClick={handleClick}
                  src={Ferocid5}
                  
                  alt=""
                />
                <img
                  onClick={handleClick}
                  src={Ferocid4}
                  
                  alt=""
                />
                <img
                  onClick={handleClick}
                  src={Ferocid3}
                  alt=""
                  
                />
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
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Chaser4}
                  alt=""
                />
                <img onClick={handleClick} src={Chaser1} alt="" />
                <img onClick={handleClick} src={Chaser2} alt="" />
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Chaser3}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="media-div">
            <div className="media-left">
              <div className="images">
                <img onClick={handleClick} src={Vincet1} alt="" />
                <img onClick={handleClick} src={Vincet2} alt="" />
                <img
                  onClick={handleClick}
                  className="full-img"
                  src={Vincet4}
                  alt=""
                />
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
    </>
  );
};

export default Media;
