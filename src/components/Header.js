import React from "react";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";
import CartItems from "./CartItems";
import "../App.css";

const Header = ({
  onNavbarClick,
  onSearchFormClick,
  onCartItemClick,
  navbarActive,
  searchFormActive,
  cartItemActive,
}) => (
  <header className="header">
    <a href="#" className="logo">
      <img src="/images/logo.png" alt="" />
    </a>
    <Navbar active={navbarActive} onClick={onNavbarClick} />
    <div className="icons">
      <div
        className="fas fa-search"
        id="search-btn"
        onClick={onSearchFormClick}
      ></div>
      <div
        className="fas fa-shopping-cart"
        id="cart-btn"
        onClick={onCartItemClick}
      ></div>
      <div className="fas fa-bars" id="menu-btn" onClick={onNavbarClick}></div>
    </div>
    <SearchForm active={searchFormActive} />
    <CartItems active={cartItemActive} />
  </header>
);

export default Header;
