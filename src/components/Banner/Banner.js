import React from "react";
import "./Banner.css";
import tooth from "../../assets/tooth.png";
import heart from "../../assets/heart.png";
import lungs from "../../assets/lungs.png";
import stomach from "../../assets/stomach.png";
import kidney from "../../assets/kidney.png";
import joint from "../../assets/joint.png";
import arrow from "../../assets/arrow.png";
import RemoveIcon from "@material-ui/icons/Remove";
import LocationOn from "@material-ui/icons/LocationOn";
import MyLocation from "@material-ui/icons/MyLocation";
function Banner() {
  return (
    <div className="banner">
      <div className="banner_top">
        <img
          className="img1"
          src="https://image.shutterstock.com/image-photo/mother-girl-being-examined-by-600w-185901890.jpg"
          alt=""
        />

        <h2>
          Book appointement for <span>you and your family</span> <br />
          with qualified doctors online
        </h2>
        <img
          className="img2"
          src="https://image.shutterstock.com/image-photo/back-view-woman-making-video-600w-1683359032.jpg"
          alt=""
        />
      </div>
      <div className="banner_bottom">
        <div className="medical">
          <div className="medical_icon">
            <img src={tooth} alt="" />
            <h3>Dentist</h3>
          </div>
          <div className="medical_icon">
            <img src={heart} alt="" />
            <h3>Cardiologist</h3>
          </div>
          <div className="medical_icon">
            <img src={lungs} alt="" />
            <h3>Pulmonologist</h3>
          </div>
          <div className="medical_icon">
            <img src={stomach} alt="" />
            <h3>Gastroenterologist</h3>
          </div>
          <div className="medical_icon">
            <img src={kidney} alt="" />
            <h3>Nephrologist</h3>
          </div>
          <div className="medical_icon">
            <img src={joint} alt="" />
            <h3>Orthopedic</h3>
          </div>
          <div className="medical_icon">
            <img src={arrow} alt="" />
          </div>
        </div>
        <div className="search">
          <img
            className="img1"
            src="https://image.shutterstock.com/image-photo/mother-girl-being-examined-by-600w-185901890.jpg"
            alt=""
          />

          <div className="search_bar">
            <div className="search_handle">
              <LocationOn className="location" />
              <input placeholder="Location" type="text" />
              <RemoveIcon className="divider" />
              <MyLocation className="mylocation" />
              <input className="my_input"
                placeholder="Doctor, specialty, hospital or treatment"
                type="text"
              />
              <div className="btn-1">Book Now</div>
            </div>
          </div>
          <img
            className="img2"
            src="https://image.shutterstock.com/image-photo/back-view-woman-making-video-600w-1683359032.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;
