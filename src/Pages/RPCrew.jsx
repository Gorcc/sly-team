import React from "react";
import "../Styles/RPCrew.scss";
import Transition from "../transitions/transition";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";

const RPCrew = () => {
  const Times = [7000];
  const [isTimerActive, setTimerActive] = useState(false);
  const Random = Math.floor(Math.random() * Times.length);

  const handleLoad = () => {
    console.log("Lorenzo loaded");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimerActive((prevTimerActive) => !prevTimerActive);
    }, 7000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (isTimerActive) {
      const disableTimerTimeout = setTimeout(() => {
        setTimerActive(false);
      }, 2000);

      return () => clearTimeout(disableTimerTimeout);
    }
  }, [isTimerActive]);
  return (
    <>
      <Header></Header>
      <Transition>
        <div
          className={isTimerActive ? "rp-container bg-glitch" : "rp-container"}
        >
          <div className="bg-glitch"></div>
          <div className="rp-card">
            <a href="/lorenzo">
              <div
                className={`rp-img lorenzo ${isTimerActive ? "hover" : ""}`}
                onLoad={handleLoad}
              ></div>
              <h2>Lorenzo</h2>
              <div className={`rp-img lorenzo hover hidden`}></div>
            </a>
          </div>

          <div className="second-lane">
            <div className="rp-card">
              <a href="/dante">
                <div
                  className={`rp-img dante ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Dante</h2>
                <div className={`rp-img dante hover hidden`}></div>
              </a>
            </div>

            <div className="rp-card">
              <a href="/tyrone">
                <div
                  className={`rp-img tyrone ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Tyrone</h2>
                <div className={`rp-img tyrone hover hidden`}></div>
              </a>
            </div>
          </div>
          <div className="second-lane">
            <div className="rp-card">
              <a href="/rian">
                <div
                  className={`rp-img rian ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Rian</h2>
                <div className={`rp-img rian hover hidden`}></div>
              </a>
            </div>
            <div className="rp-card">
              <a href="/dave">
                <div
                  className={`rp-img dave ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Dave</h2>
                <div className={`rp-img dave hover hidden`}></div>
              </a>
            </div>

            <div className="rp-card">
              <a href="/loid">
                <div
                  className={`rp-img loid ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Loid</h2>
                <div className={`rp-img loid hover hidden`}></div>
              </a>
            </div>
          </div>
          <div className="second-lane">
            {/* <div className="rp-card">
              <a href="/bennao">
                <div
                  className={`rp-img bennao ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Ben Nao</h2>
                <div className={`rp-img bennao hover hidden`}></div>
              </a>
            </div> */}

            <div className="rp-card">
              <a href="/carter">
                <div
                  className={`rp-img carter ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Carter</h2>
                <div className={`rp-img carter hover hidden`}></div>
              </a>
            </div>
            <div className="rp-card">
              <a href="/jayj">
                <div
                  className={`rp-img jayj ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Jay J</h2>
                <div className={`rp-img jayj hover hidden`}></div>
              </a>
            </div>
            <div className="rp-card">
              <a href="/russel">
                <div
                  className={`rp-img russel ${isTimerActive ? "hover" : ""}`}
                ></div>
                <h2>Russel</h2>
                <div className={`rp-img russel hover hidden`}></div>
              </a>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </Transition>
    </>
  );
};

export default RPCrew;
