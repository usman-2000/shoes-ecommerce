import React from "react";
import "../styles/brands.css";
import adidas from "../images/adidas.png";
import airjordan from "../images/airJordan.png";
import nike from "../images/nike.png";
import puma from "../images/puma.png";
export default function Brands() {
  return (
    <div className="brandDiv">
      <div className="brandInnerDiv">
        <img className="brandPic" src={adidas} alt="Adidas" />
      </div>
      <div className="brandInnerDiv">
        <img className="brandPic" src={airjordan} alt="Air Jordan" />
      </div>
      <div className="brandInnerDiv">
        <img className="brandPic" src={nike} alt="Nike" />
      </div>
      <div className="brandInnerDiv">
        <img className="brandPic" src={puma} alt="Puma" />
      </div>
    </div>
  );
}
