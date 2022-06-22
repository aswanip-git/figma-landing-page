import React from "react";
import './subHeader.css';
import Screen from "../images/screens.png";

function SubHeader() {
    return (
        <div className="subHeader">
            <div className="subHeaderText">
                <div className="subHeaderTitle">
                    <p className="headLine">
                        Work at the speed <span className="subHeadLine"> of thought</span>
                    </p>
                </div>
                <div className="subheaderContent">
                    <p class="content"> 
                        Most calendars are designed for teams. Slate is designed for
                        <span className="subContent">
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
    )
}

export default SubHeader