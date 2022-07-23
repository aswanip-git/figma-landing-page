import React from "react";
import "./CallToAction.css";
import CTAMedia from "../../images/call-to-action-media.svg";

function CallToAction() {
  return (
    <div className="callToAction">
      <div className="callToActionContent">
        <div className="ctaTitle">
          <p>
            OpenType features <br />
            and Variable fonts
          </p>
        </div>

        <div className="ctaButton">
          <button className="button">Try For Free</button>
        </div>
      </div>

      <div className="callToActionMedia">
        <img className="image" src={CTAMedia} alt="line-chart" />
      </div>
    </div>
  );
}

export default CallToAction;
