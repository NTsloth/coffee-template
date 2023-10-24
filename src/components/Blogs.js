import React from "react";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      imageSrc: "images/coffee7.jpg",
      title: "Tasty and Refreshing Coffee",
      date: "March 23, 2022",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsam.",
    },
    {
      id: 2,
      imageSrc: "images/coffee8.jpg",
      title: "Tasty and Refreshing Coffee",
      date: "March 23, 2022",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsam.",
    },
    {
      id: 3,
      imageSrc: "images/coffe9.jpg",
      title: "Tasty and Refreshing Coffee",
      date: "March 23, 2022",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, ipsam.",
    },
  ];

  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        Our <span>Blogs</span>
      </h1>
      <div className="box-container">
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

const BlogItem = ({ blog }) => {
  return (
    <div className="box">
      <div className="image">
        <img src={blog.imageSrc} alt="" />
      </div>
      <div className="content">
        <a href="#" className="title">
          {blog.title}
        </a>
        <span>by Nino / {blog.date}</span>
        <p>{blog.content}</p>
        <a href="#" className="btn">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Blogs;
