import React from "react";
import "../styles/Home.css";
import homeBanner from "../images/home-banner.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" alt="amazon banner" src={homeBanner} />
      </div>
      <div className="home__row"></div>
      <div className="home__row"></div>
      <div className="home__row"></div>
    </div>
  );
};

export default Home;
