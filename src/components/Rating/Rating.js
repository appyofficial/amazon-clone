import React from "react";
import "./styles/styles.css";

export default function Rating({ rating }) {
  return (
    <div className="product__rating">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <p key={i}>
            <span role="img" aria-label="star">
              ⭐
            </span>
          </p>
        ))}
    </div>
  );
}
