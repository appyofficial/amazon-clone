import React from "react";
import "../styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";

const HeaderLogo = () => {
  return (
    <Link to="/">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG23.png"
        alt="amazon logo"
      />
    </Link>
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

const HeaderNav = ({ productsInBasket }) => {
  return (
    <div className="header__nav">
      <Link to="/login">
        <HeaderNavOption lineOne="Hello Guest" lineTwo="Sign In" />
      </Link>
      <HeaderNavOption lineOne="Return" lineTwo="& Orders" />
      <HeaderNavOption lineOne="Your" lineTwo="Prime" />
      {/*Basket */}
      <Link to="/checkout">
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__optionBasketCount">
            {productsInBasket}
          </span>
        </div>
      </Link>
    </div>
  );
};

//Header
const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav productsInBasket={basket.length} />
    </div>
  );
};

export default Header;
