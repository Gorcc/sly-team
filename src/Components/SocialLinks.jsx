import React from "react";
import "../Styles/Trailers.scss";
import YouTube from "../Styles/youtube-color-svgrepo-com.svg";
import Discord from "../Styles/discord-icon-svgrepo-com.svg";
import Tiktok from "../Styles/tiktok-svgrepo-com.svg";

const SocialLinks = () => {
  return (
    <div className="trailers-container">
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
          <a href="https://www.tiktok.com/@slyculture96" target="_blank">
            <img src={Tiktok} alt="Tiktok Image" />
          </a>

          <h1>TikTok</h1>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
