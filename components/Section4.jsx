import React from "react";
import "./Section4.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

import design1 from "../assets/signature/set4.jpg";
import design2 from "../assets/signature/ruby.jpg";
import design3 from "../assets/signature/DiamondBangle.jpg";
import design4 from "../assets/signature/pearlCrown.jpg";
import design5 from "../assets/signature/pendant.jpg";

const Section4 = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = 400;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const designs = [
    { id: 1, image: design1, title: "Golden Heritage Necklace" },
    { id: 2, image: design2, title: "Majestic Ruby Set" },
    { id: 3, image: design3, title: "Opulent Diamond Bangles" },
    { id: 4, image: design4, title: "Royal Pearl Crown" },
    { id: 5, image: design5, title: "Gold Pendant" },
  ];

  return (
    <section className="signature-section" id="signature">
      <div className="signature-container">
        <h2 className="signature-title">Our Signature Designs</h2>
        <p className="signature-subtitle">
          Discover Shree Laxmi’s most exquisite masterpieces — timeless, handcrafted,
          and inspired by royal elegance.
        </p>

        <div className="carousel-wrapper">
          <button
            className="carousel-btn left"
            onClick={() => scroll("left")}
            aria-label="Scroll Left"
          >
            <FaChevronLeft />
          </button>

          <div className="carousel" ref={scrollRef}>
            {designs.map((item) => (
              <div className="design-card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="design-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-btn right"
            onClick={() => scroll("right")}
            aria-label="Scroll Right"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
