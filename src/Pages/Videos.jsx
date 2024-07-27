import React from "react";
import Transition from "../transitions/transition";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Videos.scss";
import YouTube, { YouTubeProps } from "react-youtube";

const Videos = () => {
  return (
    <>
        <Header videos={true}></Header>
    <Transition>
  
      <div className="videos-container">
        <div className="videos-left">
          <h1>Drift Edits</h1>

          <div className="drift-edits">
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/Y9K9s02-eDk?si=Lip4o1rO5MFoXeJR"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/BvK9-9DmZYE?si=8pgxDjrYDTQ7Dchq"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/acNTGsxVsNs?si=3ujDAUCZU6by_fuy"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/Bx5YPTcH0jQ?si=OaKgC9hHyPZ7ekdf"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>{" "}
          </div>
          <iframe
            width="80%"
            height="315"
            src="https://www.youtube.com/embed/jIDigfZ8gEc?si=nD0brER67Dl7GitI"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="videos-middle"></div>
        <div className="videos-right">
          <h1>Race Videos</h1>
          <div className="drift-edits">
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/Lsx4bPYJ_K4?si=D6QkGqawlYvJ7N3u"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>{" "}
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/YbOA219jiUM?si=3ntRT1UBYZWl4uCw"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/PfFG7EggjZE?si=N3pSnqhaZWlj07fp"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/_J-fMo-iHLc?si=FaS-7-iZ6HyCgSj6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/lcBJ2fYOuUE?si=RouSznwcRIf5K53g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </Transition>
    </>
  );
};

export default Videos;
