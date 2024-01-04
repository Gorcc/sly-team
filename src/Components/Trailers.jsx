import React from "react";
import "../Styles/Trailers.scss";

const Trailers = () => {
  return (
    <div className="trailers-container">
      <h1>TRAILERS</h1>
      <video src="https://res.cloudinary.com/dvi8iejpx/video/upload/v1704402443/ha_j6tmux.mp4" autoPlay loop muted></video>
      <div className="youtube-wrap">
        <div className="youtube-box">
        <iframe
          width="45%"
          height="50%"
          src="https://www.youtube.com/embed/jIDigfZ8gEc?si=KVCGJi1Iw3eXiUxi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          width="45%"
          height="50%"
          src="https://www.youtube.com/embed/iUxk_Rec9Os?si=eocI1g5I4PnJG9cS"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        </div>
      </div>
      
    </div>
  );
};

export default Trailers;
