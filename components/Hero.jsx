
import React, { useState, useEffect } from "react";
import "./Hero.css";
import { Link} from "react-router-dom";

const Hero = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Where Elegance Meets Eternity</h1>
        <p className="hero-subtitle">
          Discover timeless jewellery crafted with passion and precision.
        </p>
        
        
  <Link
    to="/store"
    className="explore-btn"
    onClick={() => {
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    Explore Collections
  </Link>

      </div>
    </section>
  );
};

export default Hero;
