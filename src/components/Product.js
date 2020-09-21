import React from "react";
import "../styles/product.css";

export default function Product({ id, title, imageUrl, price, rating }) {
  return (
    <div className="product" id={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>SEK</small>
          <strong> {price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>
      <img src={imageUrl} alt={title} />
      <button>Add to basket</button>
    </div>
  );
}
