import React from "react";
import { useStateValue } from "../context/StateProvider";
import "../styles/CheckoutProduct.css";

export default function CheckoutProduct({ id, title, image, price, rating }) {
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <div>
        <img className="checkoutProduct__image" src={image} alt={title} />
      </div>

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>SEK</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
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
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}
