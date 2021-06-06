import { Facebook, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="branding">
          <h2>SmartMeet</h2>
          <p>
            Be sure to take a look at our <br />
            Terms of Use and Privacy Policy
          </p>
        </div>
        <div className="about">
          <h3>About</h3>
          <h4>About Us</h4>
          <h4>Blog</h4>
          <h4>Team</h4>
          <h4>Career</h4>
          <h4>Contact</h4>
        </div>
        <div className="company">
          <h3>Company</h3>
          <h4>Privacy</h4>
          <h4>Support</h4>
          <h4>Help Desk</h4>
          <h4>FAQ</h4>
        </div>
        <div className="appointment">
          <h3>Book an Appointment</h3>

          <div className="mail">
            <input type="text" placeholder="Your email" />
            <div className="btn1">Book Appointment</div>
          </div>
          <div className="icons">
            <Twitter />
            <Facebook />
            <LinkedIn />
          </div>
        </div>
      </div>
      <div>
        <hr className="solid"/>
      </div>
      <div className="footer_bottom">
        <h5>Copyright2021 Redien.Design</h5>
      </div>
    </div>
  );
}

export default Footer;
