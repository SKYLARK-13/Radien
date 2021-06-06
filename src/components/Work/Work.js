import { LocalHospital, PlaylistAddCheck, ThumbUp } from "@material-ui/icons";
import React from "react";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import "./Work.css";
import max from "../../assets/max.png"
import apollo from "../../assets/apollo.png"
import fortis from "../../assets/fortis.png"
import blk from "../../assets/blk.png"
import artemis from "../../assets/artemis.png"



function Work() {
  return (
    <div className="work">
      <div className="work_top">
        <h1>How it works</h1>
        <div className="cards">
          <div className="card">
            <h3>01</h3>
            <h4>Select hospital &location</h4>
            <LocalHospital />
          </div>
          <div className="card">
            <h3>02</h3>
            <h4>Choose doctor and preferred slot</h4>
            <PermContactCalendarIcon />
          </div>
          <div className="card">
            <h3>03</h3>
            <h4>Add your details and verify</h4>
            <PlaylistAddCheck />
          </div>
          <div className="card">
            <h3>04</h3>
            <h4>Booking done</h4>
            <br />
            <ThumbUp />
          </div>
        </div>
      </div>
      <div className="work_bottom">
        <h1>Our Partnerships</h1>
        <p>
          We have partnered with the best hospitals and doctors
          <br />
          in Australia to provide you the best healthcare.
        </p>
        <div className="sponsers">
          <div className="sponser">
            <img src={max} alt="" />
          </div>
          <div className="sponser">
            <img src={apollo} alt="" />
          </div>
          <div className="sponser">
            <img src={fortis} alt="" />
          </div>
          <div className="sponser">
            <img src={blk} alt="" />
          </div>
          <div className="sponser">
            <img src={artemis} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
