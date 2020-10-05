import React from "react";
import { useStateValue } from "../../context/StateProvider";
import "./styles/Payment.css";
import { CheckoutProduct } from "../../components";

export default function Payment() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout ({basket?.length})</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Lilla torg</p>
            <p>Malmö, Sweden</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__items">
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
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items</h3>
          </div>
          <div className="payment__details">{/*Payment stripe */}</div>
        </div>
      </div>
    </div>
  );
}
