import React from "react";

const Products = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/images/coffeinbag.png",
      title: "Fresh Coffee",
      stars: [1, 2, 3, 4, 5],
      price: "$15.99 / $20.99",
    },
    {
      id: 2,
      imageSrc: "/images/coffeinbag2.png",
      title: "Fresh Coffee",
      stars: [1, 2, 3, 4, 5],
      price: "$15.99 / $20.99",
    },
    {
      id: 3,
      imageSrc: "/images/coffeinbag3.png",
      title: "Fresh Coffee",
      stars: [1, 2, 3, 4, 5],
      price: "$15.99 / $20.99",
    },
  ];

  return (
    <section className="products" id="products">
      <h1 className="heading">
        Our <span>Products</span>
      </h1>
      <div className="box-container">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

const ProductItem = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= product.stars.length) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="box">
      <div className="icons">
        <a href="#" className="fas fa-shopping-cart"></a>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
      </div>
      <div className="image">
        <img src={product.imageSrc} alt="" />
      </div>
      <div className="content">
        <h3>{product.title}</h3>
        <div className="stars">{renderStars()}</div>
        <div className="price">{product.price}</div>
      </div>
    </div>
  );
};

export default Products;
