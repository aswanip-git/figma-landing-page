import React from "react";
import "./Features.css";
import Frame from "../../images/frame.svg";
import Interface from "../../images/intuitive-interface.svg";
import Infinity from "../../images/infinity.svg";
import Vector from "../../images/vector.svg";

function Features() {
  return (
    <div className="features">
      <div className="featureHead">
        <p className="head">Features</p>
        <p className="featureSubHead">
          Most calendars are designed for teams. Slate is designed for
          <br />
          freelancers who want a simple way to plan their schedule.
        </p>
      </div>

      <div className="featuresFrame">
        <div className="frameImgDiv">
          <img className="frameImg" src={Frame} alt="frame" />
        </div>

        <div className="frameContentDiv">
          <div className="featureCard">
            <div className="featureCardBody">
              <div>
                <img src={Vector} alt="vector" />
              </div>

              <div className="cardTitle">
                <span>A single source of truth</span>
              </div>
            </div>

            <p className="cardText">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="featureCard">
            <div className="featureCardBody">
              <div>
                <img src={Interface} alt="vector" />
              </div>

              <div className="cardTitle">
                <span>Intuitive interface</span>
              </div>
            </div>

            <p className="cardText">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>

          <div className="featureCard">
            <div className="featureCardBody infinity">
              <div>
                <img src={Infinity} alt="infinity" />
              </div>
              <div className="cardTitle">
                <span>Or with rules</span>
              </div>
            </div>
            <p className="cardText">
              When you add work to your Slate calendar we automatically
              calculate useful insights
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
