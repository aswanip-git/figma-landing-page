import React from "react";
import "./Partners.css";
import AppStore from "../../images/app-store.svg";
import Apiary from "../../images/apiary.svg";
import Android from "../../images/android.svg";
import Bascamp from "../../images/basecamp.svg";
import Airbnb from "../../images/airbnb.svg";
import IBM from "../../images/ibm.svg";

function Partners() {
  return (
    <div className="partners">
      <div className="partnersHead">
        <p className="partnersTitle">Partners</p>
        <p className="partnersSubHead">
          We focus on ergonomics and meeting you where you work.
          <br />
          It's only a keystroke away.
        </p>
      </div>

      <div className="partnersDiv">
        <div class="partnerLogoRow">
          <div>
            <img alt="app-store-logo" src={AppStore} />
          </div>
          <div>
            <img alt="apiary-logo" src={Apiary} />
          </div>
          <div>
            <img alt="android-logo" src={Android} />
          </div>
          <div>
            <img alt="basecamp-logo" src={Bascamp} />
          </div>
          <div>
            <img alt="airbnb-logo" src={Airbnb} />
          </div>
          <div>
            <img alt="ibm-logo" src={IBM} />
          </div>
        </div>

        <div className="allPartnersBtnDiv">
          <button className="allPartners button">All Partners</button>
        </div>
      </div>
    </div>
  );
}

export default Partners;