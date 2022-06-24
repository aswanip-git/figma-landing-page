import React from "react";
import "./subHeader.css";
import Screen from "../images/screens.png";

function SubHeader() {
  return (
    <div className="subHeader">
      <div className="subHeaderText">
        <div className="subHeaderTitle">
          <p className="headLine">
            <span className="subHeadLine">
              Work at the speed <br />
              of thought
            </span>
          </p>
        </div>
        <div className="subHeaderContent">
          <p className="content">
            <span className="subContent">
              Most calendars are designed for teams. Slate is designed for
              <br />
              freelancers who want a simple way to plan their schedule.
            </span>
          </p>
        </div>
      </div>
      <div className="subHeaderButton">
        <button className="tryForFree button">Try for Free</button>
        <button className="learnMore button">Learn More</button>
      </div>
      <div className="subHeaderScreens">
        <img className="screen" src={Screen} alt="dashboard screen" />
      </div>
    </div>
  );
}

export default SubHeader;
