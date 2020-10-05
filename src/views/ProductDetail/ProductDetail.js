import { Button } from "@material-ui/core";
import React from "react";
import { Rating, AddToCart } from "../../components";
import "./styles/styles.css";

export default function ProductDetail() {
  return (
    <div className="productDetail">
      <div className="productDetail__main">
        <div className="productDetail__mainImg"></div>
        <div className="productDetail__mainDis">
          <div>Brand Apple</div>
          <h2>Apple watch SE 44mm with sport loop</h2>
          <Rating rating={5} />
          <p>Size: 44mm</p>
          <p>Color: Black</p>
          <ul>
            <li>Very good watch.</li>
            <li>Track your exercise.</li>
            <li>Better then fitbit</li>
          </ul>
        </div>
        <div className="productDetail__addtocart">
          <h3>3 350 sek</h3>
          <h3>In Stock</h3>
          <AddToCart>Add to cart</AddToCart>
        </div>
      </div>
    </div>
  );
}
