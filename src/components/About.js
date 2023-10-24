import React from "react";

const About = () => (
  <section className="about" id="about">
    <h1 className="heading">
      <span>about</span> us
    </h1>
    <div className="row">
      <div className="image">
        <img src="/images/maincoffee.jpg" alt="" />
      </div>
      <div className="content">
        <h3>what makes our coffee special?</h3>
        <p>
          Our coffee stands out from the rest due to our unwavering dedication
          to sourcing the highest quality beans from diverse corners of the
          globe. We meticulously select each bean, ensuring that they meet our
          rigorous standards for taste, aroma, and quality. These premium beans
          are then subjected to an artisanal roasting process, carefully crafted
          to enhance and preserve the unique characteristics of each variety.
        </p>
        <p>
          Our skilled roasters take pride in their craft, coaxing out the full
          potential of every bean to create a brew that's both rich and
          aromatic. The result is a deeply satisfying cup of coffee that is not
          just a morning ritual but a sensorial experience. We believe that this
          commitment to excellence at every step of the journey is what truly
          sets our coffee apart, allowing you to savor a cup of extraordinary
          coffee with every sip.
        </p>
        <a href="#" className="btn">
          learn more
        </a>
      </div>
    </div>
  </section>
);

export default About;
