import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const HeaderLogo = () => {
  return (
    <img
      className="header__logo"
      src="http://pngimg.com/uploads/amazon/amazon_PNG23.png"
      alt="amazon logo"
    />
  );
};

const HeaderSearch = () => {
  return (
    <div className="header__search">
      <input className="header__searchInput" type="text" />
      <SearchIcon
        style={{
          color: "grey",
          background: "white",
          height: "30px",
        }}
      />
    </div>
  );
};

const HeaderNavOption = ({ lineOne, lineTwo }) => {
  return (
    <div className="header__option">
      <span className="header__optionLineOne">{lineOne}</span>
      <span className="header__optionLineTwo">{lineTwo}</span>
    </div>
  );
};

const HeaderNav = () => {
  return (
    <div className="header__nav">
      <HeaderNavOption lineOne="Hello Guest" lineTwo="Sign In" />
      <HeaderNavOption lineOne="Return" lineTwo="& Orders" />
      <HeaderNavOption lineOne="Your" lineTwo="Prime" />
      {/*Basket */}
      <div className="header__optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header__optionBasketCount">
          0
        </span>
      </div>
    </div>
  );
};

//Header
const Header = () => {
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav />
    </div>
  );
};

export default Header;
