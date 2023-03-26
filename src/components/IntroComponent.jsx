import React from "react";
import shoe2 from "../images/shoe 2.png";
import "../styles/introcomponent.css";

export default function IntroComponent() {
  return (
    <div className="intro-cont">
      <div className="image-cont">
        <img src={shoe2} alt="" />
      </div>
      <div className="heading-cont">
        <h1>Improve your well-being with Comfortable Shoes</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer
        </p>
      </div>
    </div>
  );
}
