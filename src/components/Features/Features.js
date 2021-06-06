import React from "react";
import "./Features.css";
import location from "../../assets/location.png";
import doc from "../../assets/doc.png";
import discuss from "../../assets/discuss.png";
import chat from "../../assets/chat.png";
import people from "../../assets/people.png";
import { AddCircle, PeopleAlt, PersonAdd } from "@material-ui/icons";

function Features() {
  return (
    <div className="features">
      <div className="features_top">
        <h1>With Smart Meet, You can</h1>
        <div className="feature_icons">
          <div className="feature_icon">
            <img src={location} alt="" />
            <h4>Find a Hospital</h4>
          </div>
          <div className="feature_icon">
            <img src={doc} alt="" />
            <h4>Find a Doctor</h4>
          </div>
          <div className="feature_icon">
            <img src={discuss} alt="" />
            <h4>Book online Consultation</h4>
          </div>
          <div className="feature_icon">
            <img src={chat} alt="" />
            <h4>Book in-person Consultaion</h4>
          </div>
          <div className="feature_icon">
            <img src={people} alt="" />
            <h4>Book Consultation for family</h4>
          </div>
        </div>
      </div>
      <div className="features_bottom">
        <h2>Patients Trust Us</h2>
        <div className="trust_cards">
          <div className="trust_card">
            <AddCircle />
            <h4>
              200+
              <br />
              <span>Hospitals</span>
            </h4>
          </div>
          <div className="trust_card">
            <PersonAdd />
            <h4>
              1200+
              <br />
              <span>Doctors</span>
            </h4>
          </div>
          <div className="trust_card">
            <PeopleAlt />
            <h4>
              5000+
              <br />
              <span>Happy Patients</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
