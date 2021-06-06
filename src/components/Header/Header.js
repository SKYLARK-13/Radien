import React from "react";
import "./Header.css";
import RemoveIcon from "@material-ui/icons/Remove";
import { Button } from "@material-ui/core";
import Sort from "../../assets/menu.png";
function Header() {
  return (
    <div className="header">
      <div className="header_title">
        <h2>
          Smart<span>Meet</span>
        </h2>
      </div>
      <div className="header_detail">
        <div className="detail_login">
          <h2>Login</h2>
          <RemoveIcon className="divider" />
          <h2>Sign Up</h2>
        </div>
        <div className="detail_button">
          <div className="btn-1">Book Appointment</div>
          <div className="btn-2">Register Hospital</div>
        </div>
      </div>
      <div id="drop" class="dropdown">
        <button class="dropbtn">
          <img src={Sort}></img>
        </button>
        <div class="dropdown-content">
          <a href="#">Login</a>
          <a href="#">Sign Up</a>
          <a href="#">Book Appointment</a>
          <a href="#">Register Hospital</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
