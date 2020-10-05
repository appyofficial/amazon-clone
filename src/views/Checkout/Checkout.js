import React from "react";
import "./styles/Checkout.css";
import adBanner from "../../images/adbanner.png";
import { Subtotal, CheckoutProduct } from "../../components";
import { useStateValue } from "../../context/StateProvider";

export default function Checkout() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={adBanner} alt="appysharma.com" />

        <div>
          <h3>Hello, {user ? user.email : "Guest!"}</h3>
          <h2 className="checkout__title">Your shopping cart</h2>
          {basket.length < 1 ? (
            <div className="empty_cart">
              <div className="empty_cart_dis">
                <h3>You Shopping cart is empty.</h3>
                <p>Add some products in basket and come back.</p>
              </div>
            </div>
          ) : (
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
          )}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
