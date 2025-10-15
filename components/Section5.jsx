import React from "react";
import "./Section5.css";
import { FaQuoteLeft } from "react-icons/fa";

const Section5 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Aarohi Mehta",
      feedback:
        "Shree Laxmi Jewellers created my bridal set exactly how I imagined. The craftsmanship and detail were truly divine!",
      location: "Mumbai, India",
    },
    {
      id: 2,
      name: "Rohan Sharma",
      feedback:
        "Bought an anniversary necklace for my wife — the quality and polish speak pure luxury. Absolutely premium!",
      location: "Delhi, India",
    },
    {
      id: 3,
      name: "Nisha Kapoor",
      feedback:
        "Their personalized service made me feel special. The designs are timeless, elegant, and beyond expectations.",
      location: "Bangalore, India",
    },
  ];

  return (
    <section className="testimonial-section" id="testimonials">
      <div className="testimonial-container">
        <h2 className="testimonial-title">Client Stories</h2>
        <p className="testimonial-subtitle">
          Every jewel tells a story — hear from those who found their sparkle at
          Shree Laxmi Jewellers.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.id} className="testimonial-card">
              <FaQuoteLeft className="quote-icon" />
              <p className="feedback">"{item.feedback}"</p>
              <h3>{item.name}</h3>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section5;
