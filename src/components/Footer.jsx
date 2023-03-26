import React from "react";
import Button from "./Button";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <h1>ABC Company. We’re here</h1>
        <p>
          Hello, we are ABC. trying to make an effort to put the right people
          for you to get the best results. Just insight
        </p>
        <Button className="btn" name="Contact us" />
        <hr />
        <div className="social-icon">
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>
    </div>
  );
}
