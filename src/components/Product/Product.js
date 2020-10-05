import React from "react";
import { Rating } from "..";
import { useStateValue } from "../../context/StateProvider";
import "./styles/product.css";

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
        <Rating rating={rating} />
      </div>
      <img src={imageUrl} alt={title} />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}
