import React from "react";
import "../Styles/Images.scss";
import Header from "../Components/Header";
import Image1 from "../Assets/Images/5.9.2023 Practicing at Red Rock in Drift server/image (1).webp";
import Image2 from "../Assets/Images/5.9.2023 Practicing at Red Rock in Drift server/image.webp";
import Image3 from "../Assets/Images/15.10.2023 Hanging out/132FD123SACXZ.webp";
import Image4 from "../Assets/Images/15.10.2023 Hanging out/image (2).webp";
import Image5 from "../Assets/Images/15.10.2023 Hanging out/image (5).webp";
import Image6 from "../Assets/Images/16.11.2023 Ren's Birthday drifting at night/chaseredit.webp";
import Image7 from "../Assets/Images/16.11.2023 Ren's Birthday drifting at night/image.webp";
import Image8 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (1).webp";
import Image9 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (2).webp";
import Image10 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (3).webp";
import Image11 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (4).webp";
import Image12 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (5).webp";
import Image13 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (6).webp";
import Image14 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (7).webp";
import Image15 from "../Assets/Images/2023 Aralık , Mandem Gathering/image (8).webp";
import Image16 from "../Assets/Images/2023 Ocak, Race meeting/Desktop_Screenshot_2023.03.17_-_00.14.43.44.webp";
import Image17 from "../Assets/Images/2023 Ocak, Race meeting/image (1).webp";
import Image18 from "../Assets/Images/2023 Ocak, Race meeting/imagesa.webp";
import Image19 from "../Assets/Images/Ağustos Tandem Practice in Drift Server/image (3).webp";
import Image20 from "../Assets/Images/Ağustos Tandem Practice in Drift Server/image.webp";
import Image21 from "../Assets/Images/Ekim 2023 Race 2/image (1).webp";
import Image22 from "../Assets/Images/Ekim 2023 Race 2/image (2).webp";
import Image23 from "../Assets/Images/Ekim 2023 Race 2/image.webp";
import Image24 from "../Assets/Images/Ekim 2023 Race and later on in the club/image (1).webp";
import Image25 from "../Assets/Images/Ekim 2023 Race and later on in the club/image (6).webp";
import Image26 from "../Assets/Images/Ekim 2023 Race and later on in the club/image.webp";
import Image27 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/Desktop_Screenshot_2023.06.03_-_16.57.47.13.webp";
import Image28 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/Desktop_Screenshot_2023.06.15_-_16.54.44.14.webp";
import Image29 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/Desktop_Screenshot_2023.webp";
import Image30 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/hondansx8edit.webp";
import Image31 from "../Assets/Images/Haziran Freestyle Tandem in Drift Server/left.webp";
import Image32 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/loid2.webp";
import Image33 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/rain5.webp";
import Image34 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/rian2.webp";
import Image35 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/rian4.webp";
import Image36 from "../Assets/Images/Mayıs 2023 Before Race  Meeting/Screenshot_3.webp";
import Image37 from "../Assets/Images/Mayıs Pull over by the cops during Tandem in the streets/dd.webp";
import Image38 from "../Assets/Images/Mayıs Pull over by the cops during Tandem in the streets/image (2).webp";
import Image39 from "../Assets/Images/Mayıs Pull over by the cops during Tandem in the streets/image.webp";
import Image40 from "../Assets/Images/Racing Gather/image (1).webp";
import Image41 from "../Assets/Images/Racing Gather/image (2).webp";
import Image42 from "../Assets/Images/Racing Gather/image (3).webp";
import Image43 from "../Assets/Images/Racing Gather/image (4).webp";
import Image44 from "../Assets/Images/Racing Gather/image (5).webp";
import Image45 from "../Assets/Images/Racing Gather/image.webp";
import Image46 from "../Assets/Images/Şubat 2023 , Casually cruisin/352423542543.webp";
import Image47 from "../Assets/Images/Şubat 2023 , Casually cruisin/523453425243efso.webp";
import Image48 from "../Assets/Images/Şubat 2023 , Casually cruisin/867345786354.webp";
import Image49 from "../Assets/Images/Şubat 2023 , Casually cruisin/brrr.webp";
import Image50 from "../Assets/Images/Şubat 2023 , Casually cruisin/Desktop_Screenshot_2023.webp";
import Image51 from "../Assets/Images/Temmuz 2023 Tandem practice in RP/image (3).webp";
import Image53 from "../Assets/Images/Temmuz 2023 Tandem practice in RP/image.webp";
import Image54 from "../Assets/Images/Temmuz in the playground Tandem Practice in RP/111.webp";
import Image55 from "../Assets/Images/Temmuz in the playground Tandem Practice in RP/222.webp";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Transition from "../transitions/transition";
import { useEffect } from "react";
import Footer from "../Components/Footer";

const Images = () => {
  const [loading, setLoading] = useState(true);
  const [bigImage,setBigImage] = useState(false);
  const [clickedImg, setClickedImg] = useState("")
  const handleClick = (event) => {
    const src = event.target.src;
    setBigImage(true)
    setClickedImg(src)
   
  };
  if (bigImage) {
    document.documentElement.classList.add('no-scroll');
  } else {
    document.documentElement.classList.remove('no-scroll');
  }
  const handleClose = () => {

    setBigImage(false)
   
  };

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    const images = document.querySelectorAll('.full-img');
    const totalImages = images.length;

    let loadedImages = 0;

    const handleLazyLoad = () => {
      loadedImages++;
      if (loadedImages === totalImages) {
        setLoading(false);
      }
    };

    images.forEach((image) => {
      if ('loading' in HTMLImageElement.prototype) {
        image.loading = 'lazy';
      } else {
        image.addEventListener('load', handleLazyLoad);
      }
    });

    return () => {
      images.forEach((image) => {
        image.removeEventListener('load', handleLazyLoad);
      });
    };
  }, []);
  return (
    <>
    <Header></Header>
    <Transition>
    {bigImage ? <div className="fullscreen-img">
         <img src={clickedImg} alt="" />
          <FontAwesomeIcon className="close-icon" onClick={handleClose} icon={faXmark}></FontAwesomeIcon>
        </div> : ""}
     
       
        {loading && (
          <div className="loading">
            <h1>Loading Images</h1>
            <div class="lds-hourglass"></div>
          </div>
        )}
       <div className={`images-container ${loading ? "hidden" : ""} ${bigImage ? "opacity" : ""}`}>
          <h1>IMAGES</h1>
          <div className="img-div">
            <div className="images-wrap">
              <img onClick={handleClick} src={Image2} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image1} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image3} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image4} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image5} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image6} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image7} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image16} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image9} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image15} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image11} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image12} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image13} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image14} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image8} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
         
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image19} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image20} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image21} className="full-img" alt="" onLoad={handleImageLoad} />
             
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              
              <img  onClick={handleClick} src={Image26} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image27} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image28} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image29} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image30} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image31} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image32} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image33} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image34} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image35} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image36} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image37} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image38} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image39} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image43} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image44} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image45} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image50} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image47} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image48} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image49} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image46} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image51} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image53} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
          <div className="img-div">
            <div className="images-wrap">
              <img  onClick={handleClick} src={Image54} className="full-img" alt="" onLoad={handleImageLoad} />
              <img  onClick={handleClick} src={Image55} className="full-img" alt="" onLoad={handleImageLoad} />
            </div>
          </div>
        </div>
      
      <Footer></Footer>
    </Transition>
    </>
  );
};

export default Images;
