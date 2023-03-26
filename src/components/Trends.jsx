import React from "react";
import "../styles/trends.css";
import Button from "./Button";
import Card from "./Card";
import shoes2 from "../images/shoes2.jpg";
import shoes3 from "../images/shoes3.jpg";
import cart from "../images/cart.png";
export default function Trends() {
  return (
    <div className="trends-container">
      <div className="bestSeller">
        <h2 id="bestSellerHeading">Trends</h2>
        <Button className="btn" name="Shop All" />
      </div>
      <div className="products">
        <Card
          src1={shoes2}
          h3="Nike Air Max Pro"
          span="$3"
          p="Original product comes in three styles of color."
          src2={cart}
        />
        <Card
          src1={shoes3}
          h3="Nike Air Pro"
          span="$3"
          p="Original product comes in three styles of color."
          src2={cart}
        />
      </div>
    </div>
  );
}
