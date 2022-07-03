import React from "react";
import "./Features.css";
import Frame from "../../images/frame.png";
import Menu from "../../images/restaurant-menu.png";
import Infinity from "../../images/infinity.png";
import Vector from "../../images/vector.png";

function Features() {
  return (
    <div className="features">
      <div className="featuresHeader">
        <div className="featureHead">
          <p className="head">Features</p>
          <p className="featureSubHead">
            <span className="featureText">
              Most calendars are designed for teams. Slate is designed for
              <br />
              freelancers who want a simple way to plan their schedule.
            </span>
          </p>
        </div>
        <div className="featuresFrame">
          <div className="frame">
            <img className="frameImg" src={Frame} alt="frame" />
          </div>
          <div className="frameContent">
            <div className="contentRow">
              <div className="rowTitle">
                <div>
                  <img src={Menu} alt="menu" />
                </div>
                <div className="title">
                  <span>A single source of truth</span>
                </div>
              </div>
              <div className="rowText">
                <p>
                  When you add work to your Slate calendar we automatically
                  calculate useful insights
                </p>
              </div>
            </div>
            <div className="contentRow">
              <div className="rowTitle">
                <div>
                  <img src={Vector} alt="vector" />
                </div>
                <div className="title">
                  <span>Intuitive interface</span>
                </div>
              </div>
              <div className="rowText">
                <p>
                  When you add work to your Slate calendar we automatically
                  calculate useful insights
                </p>
              </div>
            </div>
            <div className="contentRow">
              <div className="rowTitle infinity">
                <div>
                  <img src={Infinity} alt="infinity" />
                </div>
                <div className="title">
                  <span>Or with rules</span>
                </div>
              </div>
              <div className="rowText">
                <p>
                  When you add work to your Slate calendar we automatically
                  calculate useful insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
