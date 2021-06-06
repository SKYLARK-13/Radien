import React from "react";
import "./Health.css";
import imga from "../../assets/imga.jpg";
import imgb from "../../assets/imgb.jpg";
import imgc from "../../assets/imgc.jpg";
import imgd from "../../assets/imgd.png";

function Health() {
  return (
    <div className="health">
      <div className="health_top">
        <h1>Health Tips and Advice</h1>
      </div>
      <div className="health_bottom">
        <div className="health_cards">
          <div className="health_card">
            <img src={imga} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imgb} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imgc} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imgd} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imgc} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imgd} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imgb} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
          <div className="health_card">
            <img src={imga} alt="" />
            <h5>28th May 2021</h5>
            <h3>Eat fresh Fruits and vegetable Daily</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </p>
          </div>
        </div>

        <div className="btn">
            <div className="btn_read">Read More</div>
        </div>
      </div>
    </div>
  );
}

export default Health;
