import React from "react";
import './subHeader.css';
import Screen from "../images/screens.png";

function SubHeader() {
    return (
        <div className="subHeader">
            <div className="subHeader_text">
                <div className="subHeader_title">
                    <span className="headLine">
                        <p>Work at the speed<br/> of thought</p>
                    </span>
                </div>
                <div className="subHeader_content">
                    <span className="content">
                        <p>Most calendars are designed for teams. Slate is designed for<br/>
                        freelancers who want a simple way to plan their schedule.</p>
                    </span>
                </div>   
            </div>
            <div className="subHeader_button">
                <button className="tryForFree button">Try for Free</button>
                <button className="learnMore button">Learn More</button>
            </div>
            <div className="subHeader_screens">
                <img className="screen" src={Screen} alt="img" />
            </div>
        </div>
    )
}

export default SubHeader