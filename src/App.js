import React, { useEffect } from "react";
import "./App.css";
import { Header, Login } from "./components";
import { Home, Checkout, Payment, ProductDetail } from "./views";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./context/StateProvider";

function App() {
  const [, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        //user logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({ type: "SET_USER", user: null });
      }
    });
  }, []);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/product-detail">
          <Header />
          <ProductDetail />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/cart">
          <Header />
          <Checkout />
        </Route>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
