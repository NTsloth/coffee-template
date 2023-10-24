import React from "react";

const Review = () => {
  const reviews = [
    {
      id: 1,
      quote:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi facilis, nihil distinctio omnis incidunt ratione veritatis sit molestias officia vitae doloribus consectetur repellendus.",
      user: "Someone",
      rating: 4.5,
    },
    {
      id: 2,
      quote:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi facilis, nihil distinctio omnis incidunt ratione veritatis sit molestias officia vitae doloribus consectetur repellendus.",
      user: "Another Person",
      rating: 4.0,
    },
    {
      id: 3,
      quote:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus modi facilis, nihil distinctio omnis incidunt ratione veritatis sit molestias officia vitae doloribus consectetur repellendus.",
      user: "Yet Another User",
      rating: 4.8,
    },
  ];

  return (
    <section className="review" id="review">
      <h1 className="heading">
        Customer's <span>Review</span>
      </h1>
      <div className="box-container">
        {reviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

const ReviewItem = ({ review }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        stars.push(<i key={i} className="fas fa-star"></i>);
      } else if (i - 0.5 === review.rating) {
        stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star"></i>);
      }
    }
    return stars;
  };

  return (
    <div className="box">
      <img src="/images/quotoes.png" alt="" className="quote" />
      <p>{review.quote}</p>
      <img src="images/person1.jpg" className="user" alt="" />
      <h3>{review.user}</h3>
      <div className="stars">{renderStars()}</div>
    </div>
  );
};

export default Review;
