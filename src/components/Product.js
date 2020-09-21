import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../styles/product.css";

export default function Product({ id, title, imageUrl, price, rating }) {
  const [, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        imageUrl,
        price,
        rating,
      },
    });
  };

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
              <p key={i}>
                <span role="img" aria-label="star">
                  ⭐
                </span>
              </p>
            ))}
        </div>
      </div>
      <img src={imageUrl} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
