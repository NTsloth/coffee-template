import React from "react";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      imageSrc: "images/coffee1.jpg",
      title: "Tasty and Healthy",
      price: "$15.99 / $20.99",
    },
    {
      id: 2,
      imageSrc: "images/coffee2.jpg",
      title: "Tasty and Healthy",
      price: "$15.99 / $20.99",
    },
    {
      id: 3,
      imageSrc: "images/coffee3.jpg",
      title: "Tasty and Healthy",
      price: "$15.99 / $20.99",
    },
    {
      id: 4,
      imageSrc: "images/coffee4.jpg",
      title: "Tasty and Healthy",
      price: "$15.99 / $20.99",
    },
    {
      id: 5,
      imageSrc: "images/coffee5.jpg",
      title: "Tasty and Healthy",
      price: "$15.99 / $20.99",
    },
    {
      id: 6,
      imageSrc: "images/coffee6.jpg",
      title: "Tasty and Healthy",
      price: "$15.99 / $20.99",
    },
  ];

  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        Our <span>Menu</span>
      </h1>
      <div className="box-container">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            imageSrc={item.imageSrc}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

const MenuItem = ({ imageSrc, title, price }) => {
  return (
    <div className="box">
      <img src={imageSrc} alt="" />
      <h3>{title}</h3>
      <div className="price">{price}</div>
      <a href="#" className="btn">
        Add to Cart
      </a>
    </div>
  );
};

export default Menu;
