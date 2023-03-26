import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import "../styles/footerBottom.css";

export default function FooterBottom() {
  return (
    <div className="footer-bottom">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="rights">
        <p>All rights reserved</p>
      </div>
      <div className="social-icon">
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
}
