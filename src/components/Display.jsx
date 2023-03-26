import React from "react";
import Button from "./Button.jsx";
import shoes9 from "../images/shoes9.jpg";
import "../styles/display.css";

export default function Display() {
  return (
    <div className="display-cont">
      <div className="para-cont">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
          culpa omnis aut vero fugi
        </p>
        <Button className="btnInDetail" name="Shop All" />
      </div>
      <div className="image-container">
        <img src={shoes9} alt="" />
      </div>
    </div>
  );
}
