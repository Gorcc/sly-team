import React, { useState } from "react";
import "../Styles/Wiki.scss";
import Transition from "../transitions/transition";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { color } from "framer-motion";
import { useEffect } from "react";
const Wiki = (props) => {
  const [t, i18n] = useTranslation("global");
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 1200;
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const colorStyle = {
    backgroundColor: props.color,
  };

  const blurValue = props.blur;
  const textcolorStyle = {
    color: props.color,
  };
  const illegalCulture = {
    margin: "0 12px",
  };
  const borderStyle = {
    border: `5px solid ${props.color}`,
  };
  const contentborderStyle = {
    border: `2px solid ${props.color}`,
  };
  const borderOne = {
    border: `1px solid ${props.color}`,
  };
  return (
    <div className="wiki-container">
      {isMobile && (
        <div className="wiki-right" style={borderStyle}>
          <h4 style={colorStyle}>{props.charname}</h4>
          <img src={props.image} alt="" />
          <div className="status" style={borderOne}>
            <div className="status-left left">
              <h5>{t("status.status")}</h5>
            </div>
            <div className="">|</div>
            <div className="status-right right">
              {props.active && <h5 className="alive">{props.active}</h5>}
              {props.active1 && <h5 className="dead">{props.active1}</h5>}
              {props.active2 && <h5 className="coma">{props.active2}</h5>}
            </div>
          </div>
          <div className="aliases" style={borderOne}>
            <div className="aliases-left left">
              <h5>{t("status.aliases")}</h5>
            </div>
            <div className="">|</div>
            <div className="aliases-right right">
              <h5>{props.aliases1}</h5>
              <h5>{props.aliases2}</h5>
              <h5>{props.aliases3}</h5>
            </div>
          </div>
          <div className="bio">
            <h5 className="bio-header" style={colorStyle}>
              Biography
            </h5>

            <div className="birth " style={borderOne}>
              <div className="birthl left">
                <h5>{t("status.date")} </h5>
              </div>
              <div className="">|</div>
              <div className="birthr right">
                <h5>{props.birthday}</h5>
              </div>
            </div>
            <div className="age" style={borderOne}>
              <div className="left">
                <h5>{t("status.age")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.age}</h5>
              </div>
            </div>
            <div className="birth-place" style={borderOne}>
              <div className="left">
                <h5>{t("status.place")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.birthplace}</h5>
              </div>
            </div>
            <div className="nationality" style={borderOne}>
              <div className="left">
                <h5>{t("status.nationality")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.nationality}</h5>
              </div>
            </div>
            <div className="gender" style={borderOne}>
              <div className="left">
                <h5>{t("status.gender")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.gender}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="wiki-left">
        <h4>
          {props.charname} is a character role-played by {props.nickname}.
        </h4>
        <div className="content-table" style={contentborderStyle}>
          <h1>
            <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            {t("wiki.contents")}
          </h1>
          {props.contentDescription && (
            <a href="#description" style={textcolorStyle}>
              {props.contentDescription}
            </a>
          )}
          {props.contentApperance && (
            <a href="#apperance" style={textcolorStyle}>
              {props.contentApperance}
            </a>
          )}
          {props.contentHobbies && (
            <a href="#hobbies" style={textcolorStyle}>
              {props.contentHobbies}
            </a>
          )}
          {props.contentTraits && (
            <a href="#traits" style={textcolorStyle}>
              {props.contentTraits}
            </a>
          )}
          {props.contentLife && (
            <a href="#life" style={textcolorStyle}>
              {props.contentLife}
            </a>
          )}
          {props.contentFamily && (
            <a href="#family" style={textcolorStyle}>
              {props.contentFamily}
            </a>
          )}
          {props.contentEducation && (
            <a href="#education" style={textcolorStyle}>
              {props.contentEducation}
            </a>
          )}
          {props.contentLove && (
            <a href="#love" style={textcolorStyle}>
              {props.contentLove}
            </a>
          )}
          {props.contentBuisness && (
            <a href="#buisness" style={textcolorStyle}>
              {props.contentBuisness}
            </a>
          )}
          {props.contentCulture && (
            <a href="#culture" style={textcolorStyle}>
              {props.contentCulture}
            </a>
          )}
          {props.contentillegal && (
            <a href="#culture" style={{ ...textcolorStyle, ...illegalCulture }}>
              {props.contentillegal}
            </a>
          )}
          {props.contentReason && (
            <a href="#reason" style={textcolorStyle}>
              {props.contentReason}
            </a>
          )}
          {props.contentInfo && (
            <a href="#info" style={textcolorStyle}>
              {props.contentInfo}
            </a>
          )}
          {props.contentGoals && (
            <a href="#goals" style={textcolorStyle}>
              {props.contentGoals}
            </a>
          )}
        </div>
        {props.description && (
          <div className="description" id="description">
            <h1>{t("wiki.description")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.description}</p>
          </div>
        )}
        {props.apperance && (
          <div className="description" id="apperance">
            <h1>{t("wiki.1")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.apperance}</p>
          </div>
        )}
        {props.hobbies && (
          <div className="description" id="hobbies">
            <h1>{t("wiki.2")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.hobbies}</p>
          </div>
        )}
        {props.fears && (
          <div className="description" id="phobias">
            <h1>{t("wiki.fear")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.fears}</p>
          </div>
        )}
        {props.traits && (
          <div className="description" id="traits">
            <h1>{t("wiki.3")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.traits}</p>
          </div>
        )}
        {props.negative && (
          <div className="description" id="n-traits">
            <h1>{t("wiki.negative")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.negative}</p>
          </div>
        )}
        {props.life && (
          <div className="description" id="life">
            <h1>{t("wiki.4")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.life}</p>
          </div>
        )}
        {props.family && (
          <div className="description" id="family">
            <h1>{t("wiki.5")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.family}</p>
          </div>
        )}
        {props.education && (
          <div className="description" id="education">
            <h1>{t("wiki.6")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.education}</p>
          </div>
        )}
        {props.love && (
          <div className="description" id="love">
            <h1>{t("wiki.7")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.love}</p>
          </div>
        )}
        {props.buisness && (
          <div className="description" id="buisness">
            <h1>{t("wiki.8")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.buisness}</p>
          </div>
        )}
        {props.culture && (
          <div className="description" id="culture">
            <h1>{t("wiki.9")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.culture}</p>
          </div>
        )}
        {props.illegal && (
          <div className="description" id="culture">
            <h1>{t("wiki.illegal")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.illegal}</p>
          </div>
        )}
        {props.reason && (
          <div className="description" id="reason">
            <h1>{t("wiki.10")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.reason}</p>
          </div>
        )}
        {props.info && (
          <div className="description" id="info">
            <h1>{t("wiki.11")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.info}</p>
          </div>
        )}
        {props.goals && (
          <div className="description" id="goals">
            <h1>{t("wiki.12")}</h1>
            <p className={blurValue ? "blur" : ""}>{props.goals}</p>
          </div>
        )}
      </div>

      {!isMobile && (
        <div className="wiki-right" style={borderStyle}>
          <h4 style={colorStyle}>{props.charname}</h4>
          <img src={props.image} alt="" />
          <div className="status" style={borderOne}>
            <div className="status-left left">
              <h5>{t("status.status")}</h5>
            </div>
            <div className="">|</div>
            <div className="status-right right">
              {props.active && <h5 className="alive">{props.active}</h5>}
              {props.active1 && <h5 className="dead">{props.active1}</h5>}
              {props.active2 && <h5 className="coma">{props.active2}</h5>}
            </div>
          </div>
          <div className="aliases" style={borderOne}>
            <div className="aliases-left left">
              <h5>{t("status.aliases")}</h5>
            </div>
            <div className="">|</div>
            <div className="aliases-right right">
              <h5>{props.aliases1}</h5>
              <h5>{props.aliases2}</h5>
              <h5>{props.aliases3}</h5>
            </div>
          </div>
          <div className="bio">
            <h5 className="bio-header" style={colorStyle}>
              Biography
            </h5>

            <div className="birth " style={borderOne}>
              <div className="birthl left">
                <h5>{t("status.date")} </h5>
              </div>
              <div className="">|</div>
              <div className="birthr right">
                <h5>{props.birthday}</h5>
              </div>
            </div>
            <div className="age" style={borderOne}>
              <div className="left">
                <h5>{t("status.age")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.age}</h5>
              </div>
            </div>
            <div className="birth-place" style={borderOne}>
              <div className="left">
                <h5>{t("status.place")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.birthplace}</h5>
              </div>
            </div>
            <div className="nationality" style={borderOne}>
              <div className="left">
                <h5>{t("status.nationality")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.nationality}</h5>
              </div>
            </div>
            <div className="gender" style={borderOne}>
              <div className="left">
                <h5>{t("status.gender")}</h5>
              </div>
              <div className="">|</div>
              <div className="right">
                <h5>{props.gender}</h5>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wiki;
