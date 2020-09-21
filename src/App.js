import React from "react";
import "./App.css";
import { Header, Home } from "./components";
import { Switch, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/checkout">
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

//Following BEM convention
