import React from "react";
import { Rating, AddToCart } from "..";
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
      <AddToCart addToBasket={addToBasket}>Add to basket</AddToCart>
    </div>
  );
}
