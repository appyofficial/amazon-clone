import React, { useState } from "react";
import "../styles/Login.css";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <img
        className="login__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG23.png"
        alt="amazon logo"
      />

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInButton">Sign In</button>
        </form>
        <p>
          By signing in you agree all the amazon fake conditions of use and
          sale. See our privacy notice.
        </p>
        <button className="login__registerButton">
          Create your amazon account
        </button>
      </div>
      <Link style={{ marginTop: "20px" }} to="/">
        {" "}
        Go Back{" "}
      </Link>
    </div>
  );
}
