import React from "react";
import "../styles/Checkout.css";
import adBanner from "../images/adbanner.png";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../context/StateProvider";

export default function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={adBanner} alt="appysharma.com" />

        <div>
          <h2 className="checkout__title">Your shopping cart</h2>
          {/*basket item */}
          <div className="checkout__products">
            {basket.map((product) => (
              <CheckoutProduct
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.imageUrl}
                rating={product.rating}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
