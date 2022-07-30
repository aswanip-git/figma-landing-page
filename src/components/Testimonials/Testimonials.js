import React from "react";
import "./Testimonials.css";
import AvatarBell from "../../images/bell-profile-img.svg";
import AvatarLane from "../../images/lane-profile-img.svg";
import AvatarFisher from "../../images/fisher-profile-img.svg";
import AvatarMurphy from "../../images/murphy-profile-img.svg";

function Testimonials() {
  return (
    <div className="testimonials">
      <div className="testimonialsHead">
        <p className="testimonialsTitle">Testimonials</p>
      </div>

      <div className="testimonialsItems">
        <div className="testimonialCardDiv">
          <div className="testmonialCard">
            <div className="client">
              <div className="avatar">
                <img alt="avatar" src={AvatarBell} />
              </div>
              <div className="clientData">
                <p className="clientName">Claire Bell</p>
                <p className="designation">Designer</p>
              </div>
            </div>
            <div className="testimonialText">
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.your financial goal for the month and
                year.
              </p>
            </div>
          </div>

          <div className="testmonialCard">
            <div className="client">
              <div className="avatar">
                <img alt="avatar" src={AvatarFisher} />
              </div>
              <div className="clientData">
                <p className="clientName">Ralph Fisher</p>
                <p className="designation">Designer</p>
              </div>
            </div>
            <div className="testimonialText">
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.
              </p>
            </div>
          </div>
        </div>

        <div className="testimonialCardDiv">
          <div className="testmonialCard">
            <div className="client">
              <div className="avatar">
                <img alt="avatar" src={AvatarLane} />
              </div>
              <div className="clientData">
                <p className="clientName">Francisco Lane</p>
                <p className="designation">Designer</p>
              </div>
            </div>
            <div className="testimonialText">
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.
              </p>
            </div>
          </div>

          <div className="testmonialCard">
            <div className="client">
              <div className="avatar">
                <img alt="avatar" src={AvatarMurphy} />
              </div>
              <div className="clientData">
                <p className="clientName">Jorge Murphy</p>
                <p className="designation">Designer</p>
              </div>
            </div>
            <div className="testimonialText">
              <p>
                Slate helps you see how many more days you need to work to reach
                your financial goal for the month and year. Slate helps you see
                how many more days you need to work to reach your financial goal
                for the month and year.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
