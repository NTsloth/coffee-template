import React from "react";

const Navbar = ({ active, onClick }) => (
  <nav className={`navbar ${active ? "active" : ""}`}>
    <a href="#home">home</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href="#products">products</a>
    <a href="#review">review</a>
    <a href="#contact">contact</a>
    <a href="#blogs">blogs</a>
  </nav>
);

export default Navbar;
