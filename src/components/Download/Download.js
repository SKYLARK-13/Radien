import React from "react";
import "./Download.css";
import mobile from "../../assets/mobile.png";
import apple from "../../assets/apple.png";
import play from "../../assets/play.png";
function Download() {
  return (
    <div className="download">
      <div className="download_left">
        <h1>For faster bookings,<br/> Use Smart Meet App</h1>
     <div className="download_link">
         <img src={play} alt="" />
         <img src={apple} alt="" />
     </div>
      </div>
      <div className="download_right">
        <img src={mobile} alt="" />
      </div>
    </div>
  );
}

export default Download;
