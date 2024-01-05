import React from "react";
import Transition from "../transitions/transition";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Videos.scss";
import YouTube, { YouTubeProps } from "react-youtube";

const Videos = () => {
  return (
    <Transition>
      <Header videos={true}></Header>
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
              src="https://www.youtube.com/embed/3cHq21ve1_k?si=2TmrzqOmLPFJaW-_"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>{" "}
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/iJnE85bCxMM?si=8m-RtyO1u3zv5hEF"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/ssaZhj-zMek?si=AZ17QBOGaNr7LmX9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/hnji1dCsj4o?si=pxqEqhnI2ZYgg17K"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              width="80%"
              height="315"
              src="https://www.youtube.com/embed/4219epvI58M?si=l1JY2Lg4vsA0Sky8"
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
  );
};

export default Videos;
