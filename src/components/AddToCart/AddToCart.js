import React from "react";
import "./styles/styles.css";

export default function AddToCart({ addToBasket, children }) {
  return (
    <button className="addtocart__Button" onClick={addToBasket}>
      {children}
    </button>
  );
}
