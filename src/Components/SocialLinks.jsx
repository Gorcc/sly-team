import React from "react";
import "../Styles/Trailers.scss";
import YouTube from "../Styles/youtube-color-svgrepo-com.svg";
import Discord from "../Styles/discord-icon-svgrepo-com.svg";
import Tiktok from "../Styles/tiktok-svgrepo-com.svg";

const SocialLinks = () => {
  // Kick logo for streamers
  const KickLogo = "https://i.pinimg.com/736x/f6/4f/56/f64f5611aabc03a17fa0a1ddfc7d0490.jpg";
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
      <h1 style={{marginTop: '48px'}}>STREAMERS</h1>
      <div className="streamers-links" style={{display: 'flex', justifyContent: 'center', gap: '48px', margin: '24px 0'}}>
        <div className="streamer-link" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <a href="https://kick.com/mordredsly" target="_blank" rel="noopener noreferrer">
            <img src={KickLogo} alt="Kick Logo" style={{width: '48px', height: '48px', marginBottom: '8px', borderRadius: '12px'}} />
          </a>
          <a href="https://kick.com/mordredsly" target="_blank" rel="noopener noreferrer" style={{color: '#53fc18', fontWeight: 600, fontSize: '20px', fontFamily: 'inherit', textDecoration: 'none', letterSpacing: '1px', marginTop: '8px'}}>mordredsly</a>
        </div>
        <div className="streamer-link" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <a href="https://kick.com/htune" target="_blank" rel="noopener noreferrer">
            <img src={KickLogo} alt="Kick Logo" style={{width: '48px', height: '48px', marginBottom: '8px', borderRadius: '12px'}} />
          </a>
          <a href="https://kick.com/htune" target="_blank" rel="noopener noreferrer" style={{color: '#53fc18', fontWeight: 600, fontSize: '20px', fontFamily: 'inherit', textDecoration: 'none', letterSpacing: '1px', marginTop: '8px'}}>htune</a>
        </div>
        <div className="streamer-link" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <a href="https://kick.com/volkotsv2" target="_blank" rel="noopener noreferrer">
            <img src={KickLogo} alt="Kick Logo" style={{width: '48px', height: '48px', marginBottom: '8px', borderRadius: '12px'}} />
          </a>
          <a href="https://kick.com/volkotsv2" target="_blank" rel="noopener noreferrer" style={{color: '#53fc18', fontWeight: 600, fontSize: '20px', fontFamily: 'inherit', textDecoration: 'none', letterSpacing: '1px', marginTop: '8px'}}>volkotsv2</a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
