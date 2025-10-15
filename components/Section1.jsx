import React from "react";
import "./Section1.css";
import shopImage from "../assets/shop.jpg";

const Section1 = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={shopImage} alt="About Shree Laxmi Jewellers" />
        </div>
        <div className="about-content">
          <h2>About Shree Laxmi Jewellers</h2>
          <p>
            Rooted in tradition and inspired by timeless beauty, Shree Laxmi Jewellers
            has been crafting exquisite jewellery pieces that celebrate life’s
            precious moments. Each creation is a blend of artistry, precision,
            and passion — forged in gold and adorned with elegance.
          </p>
          <p>
            Our legacy is built on trust and craftsmanship, where every jewel
            tells a story of sophistication and grace. Experience the artistry
            that transforms gold into emotion.
          </p>
          <button className="about-btn">Discover More</button>
        </div>
      </div>
    </section>
  );
};

export default Section1;
