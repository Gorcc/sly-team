import React from "react";
import "../Styles/Trailers.scss";
import YouTube from "../Styles/youtube-color-svgrepo-com.svg";
import Discord from "../Styles/discord-icon-svgrepo-com.svg";
import Tiktok from "../Styles/tiktok-svgrepo-com.svg";
import secondBg from "../Assets/ha.mp4";

const Trailers = () => {
  return (
    <div className="trailers-container">
      <h1>TRAILERS</h1>
      <video src={secondBg} autoPlay loop muted></video>
      <div className="youtube-wrap">
        <div className="youtube-box"></div>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jIDigfZ8gEc?si=KVCGJi1Iw3eXiUxi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/iUxk_Rec9Os?si=eocI1g5I4PnJG9cS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <h1>SOCIAL LINKS</h1>
      <div className="social-links">
        <div className="social-link">
          <a href="https://www.youtube.com/@SLYCULTURE" target="_blank">
            <img src={YouTube} alt="YouTube Image" />
          </a>

          <h1>YouTube</h1>
        </div>
        <div className="social-link">
          <a href="https://discord.gg/bSQJnY8nGd" target="_blank">
            <img src={Discord} alt="Discord Image" />
          </a>
          <h1>Discord</h1>
        </div>
        <div className="social-link">
          <a href="https://www.tiktok.com/@slyteam0" target="_blank">
            <img src={Tiktok} alt="Tiktok Image" />
          </a>

          <h1>TikTok</h1>
        </div>
      </div>
    </div>
  );
};

export default Trailers;
