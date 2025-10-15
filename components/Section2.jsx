import React from "react";
import "./Section2.css";
import jewel1 from "../assets/collection/royal.jpg";
import jewel2 from "../assets/collection/emerald.jpg";
import jewel3 from "../assets/collection/ring.jpg";
import jewel4 from "../assets/collection/diamond.jpg";
import jewel5 from "../assets/collection/bridal.jpg";
import jewel6 from "../assets/collection/pearl.jpg";

const Section2 = () => {
  const collections = [
    { id: 1, image: jewel1, title: "Royal Necklace Set" },
    { id: 2, image: jewel2, title: "Emerald Elegance" },
    { id: 3, image: jewel3, title: "Golden Rings" },
    { id: 4, image: jewel4, title: "Diamond Harmony" },
    { id: 5, image: jewel5, title: "Classic Bridal Set" },
    { id: 6, image: jewel6, title: "Pearl Serenity" },
  ];

  return (
    <section className="collections-section" id="collections">
      <div className="collections-container">
        <h2 className="collections-title">Featured Collections</h2>
        <div className="collections-grid">
          {collections.map((item) => (
            <div key={item.id} className="collection-card">
              <img src={item.image} alt={item.title} />
              <div className="collection-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section2;
