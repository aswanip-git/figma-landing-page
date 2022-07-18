import React from "react";
import "./Contents.css";
import WorkCard from "../../images/content-work-card.svg";
import DesignCard from "../../images/content-design-card.svg";

function Contents() {
  return (
    <div className="contents">
      <div className="contentsHead">
        <p className="head">Contents</p>
        <p className="contentsSubHead">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="contentCardDiv">
        <div className="contentCard">
          <img alt="card" src={WorkCard} className="contentCardImg" />
        </div>

        <div className="contentCard">
          <img alt="card" src={DesignCard} className="contentCardImg" />
        </div>
      </div>
    </div>
  );
}

export default Contents;
