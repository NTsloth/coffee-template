import React, { useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const App = () => {
  const [navbarActive, setNavbarActive] = useState(false);
  const [searchFormActive, setSearchFormActive] = useState(false);
  const [cartItemActive, setCartItemActive] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleNavbarClick = () => {
    setNavbarActive(!navbarActive);
    setSearchFormActive(false);
    setCartItemActive(false);
  };

  const handleSearchFormClick = () => {
    setSearchFormActive(!searchFormActive);
    setNavbarActive(false);
    setCartItemActive(false);
  };

  const handleCartItemClick = () => {
    setCartItemActive(!cartItemActive);
    setNavbarActive(false);
    setSearchFormActive(false);
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleScroll = () => {
    setNavbarActive(false);
    setSearchFormActive(false);
    setCartItemActive(false);
  };

  window.onscroll = handleScroll;

  return (
    <div className="App">
      <Header
        onNavbarClick={handleNavbarClick}
        onSearchFormClick={handleSearchFormClick}
        onCartItemClick={handleCartItemClick}
        navbarActive={navbarActive}
        searchFormActive={searchFormActive}
        cartItemActive={cartItemActive}
        cartItems={cartItems}
      />
      <Home />
      <About />
      <Menu onAddToCart={handleAddToCart} />
      <Products />
      <Review />
      <Contact />
      <Blogs />
      <Footer />
    </div>
  );
};

export default App;
