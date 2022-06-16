import React from "react";

function SubHeader() {
    return (
        <div className="headerContent">
            <div className="appSubHeader">
                <div className="headerBold">
                    <p className="headerHeadLine">Work at the speed</p>
                    <p className="headerHeadLine">of thought</p>
                </div>
                <div className="headerNormal">
                    <p className="headerText">Most calendars are designed for teams. Slate is designed for</p>
                    <p className="headerText">freelancers who want a simple way to plan their schedule.</p>
                </div>   
            </div>
            <div className="headerButton">
                <button className="tryForFree button" type="button">Try for Free</button>
                <button className="learnMore button" type="button">Learn More</button>
            </div>
            <div className="screens">
                
            </div>
        </div>
    )
}

export default SubHeader