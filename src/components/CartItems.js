import React from "react";

const CartItems = ({ active }) => (
  <div className={`cart-items-container ${active ? "active" : ""}`}>
    <div className="cart-item">
      <span className="fas fa-times"></span>
      <img src="/images/coffe-beans.png" alt="" />
      <div className="content">
        <h3>cart item 01</h3>
        <div className="price">$15.99/-</div>
      </div>
    </div>
    <div className="cart-item">
      <span className="fas fa-times"></span>
      <img src="/images/coffe-beans2.png" alt="" />
      <div className="content">
        <h3>cart item 02</h3>
        <div className="price">$15.99/-</div>
      </div>
    </div>
    <div className="cart-item">
      <span className="fas fa-times"></span>
      <img src="/images/coffe-beans3.png" alt="" />
      <div className="content">
        <h3>cart item 03</h3>
        <div className="price">$15.99/-</div>
      </div>
    </div>
    <div className="cart-item">
      <span className="fas fa-times"></span>
      <img src="/images/coffe-beans4.png" alt="" />
      <div className="content">
        <h3>cart item 04</h3>
        <div className="price">$15.99/-</div>
      </div>
    </div>
    <a href="#" className="btn">
      checkout now
    </a>
  </div>
);

export default CartItems;
