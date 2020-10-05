import React from "react";
import "./styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { auth } from "../../firebase";

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

const HeaderNavOption = ({ lineOne, lineTwo, onClick }) => {
  return (
    <div className="header__option" onClick={onClick}>
      <span className="header__optionLineOne">{lineOne}</span>
      <span className="header__optionLineTwo">{lineTwo}</span>
    </div>
  );
};

const HeaderNav = ({ productsInBasket, user, handleClick }) => {
  return (
    <div className="header__nav">
      <Link to={!user && "/login"}>
        <HeaderNavOption
          onClick={handleClick}
          lineOne={user ? user.email : "Hello Guest"}
          lineTwo={user ? "Sign out" : "Sign in"}
        />
      </Link>
      <HeaderNavOption lineOne="Return" lineTwo="& Orders" />
      <HeaderNavOption lineOne="Your" lineTwo="Prime" />
      {/*Basket */}
      <Link to="/cart">
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
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <HeaderLogo />
      <HeaderSearch />
      <HeaderNav
        productsInBasket={basket.length}
        user={user}
        handleClick={handleAuthentication}
      />
    </div>
  );
};

export default Header;
