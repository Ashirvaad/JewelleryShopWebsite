import React from "react";
import "./Section3.css";
import { FaGem, FaCrown, FaHandshake, FaLeaf } from "react-icons/fa";

const Section3 = () => {
  const features = [
    {
      id: 1,
      icon: <FaCrown />,
      title: "Bespoke Craftsmanship",
      text: "Every design is handcrafted by skilled artisans with years of legacy in fine jewellery making.",
    },
    {
      id: 2,
      icon: <FaGem />,
      title: "Certified Luxury",
      text: "All our jewels are certified for authenticity, ensuring timeless value and brilliance.",
    },
    {
      id: 3,
      icon: <FaHandshake />,
      title: "Personal Consultation",
      text: "We offer one-on-one design consultations to craft your perfect masterpiece.",
    },
    {
      id: 4,
      icon: <FaLeaf />,
      title: "Sustainable Beauty",
      text: "Eco-conscious materials and ethical sourcing — luxury with responsibility.",
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <h2 className="experience-title">The Shree Laxmi Experience</h2>
        <p className="experience-subtitle">
          Where luxury meets legacy — an exclusive journey through timeless artistry.
        </p>

        <div className="experience-grid">
          {features.map((feature) => (
            <div key={feature.id} className="experience-card">
              <div className="icon-wrapper">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3;
