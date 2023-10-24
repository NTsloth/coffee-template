import React from "react";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Contact</span> us
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.2370296366125!2d72.8323755152777!3d19.184846887025557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b6ee06ebad2b%3A0x9c288235c433657d!2sInfiniti%20Mall!5e0!3m2!1ska!2sge!4v1648040555871!5m2!1ska!2sge"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <form action="">
          <h3>Get in Touch</h3>
          <div className="inputBox">
            <span className="fas fa-user"></span>
            <input type="text" placeholder="Name" />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope"></span>
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone"></span>
            <input type="number" placeholder="Phone Number" />
          </div>
          <input type="submit" value="Contact Now" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
