import React from "react";
import shoe from "../images/shoe.png";
import "../styles/herosection.css";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-first-container">
        <h1>Nike Air Max</h1>
        <p>
          Experience the ultimate in comfort and convenience with our shoes,
          featuring a cushioned insole that cradles your feet with every step.
        </p>
      </div>
      <div className="hero-image-container">
        <img className="shoe-image" src={shoe} alt="" />
      </div>
    </div>
  );
}
