import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((s) => !s);

  // Smooth scroll handler (only works on homepage)
  const scrollToSection = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate to homepage, then scroll after short delay
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(id.replace("#", ""));
        if (target) {
          const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;
          const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({ top: targetTop - navHeight - 10, behavior: "smooth" });
        }
      }, 500);
      return;
    }

    // If already on homepage, scroll directly
    const target = document.getElementById(id.replace("#", ""));
    if (!target) return;
    const navHeight = document.querySelector(".navbar")?.offsetHeight || 80;
    const targetTop = target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({ top: targetTop - navHeight - 10, behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <img src={logo} alt="Shree Laxmi Jewellers" />
          <h1>Shree Laxmi Jewellers</h1>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className={`menu-icon ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#home" onClick={(e) => scrollToSection(e, "#home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#collections" onClick={(e) => scrollToSection(e, "#collections")}>
              Collection
            </a>
          </li>
          <li>
            <a href="#signature" onClick={(e) => scrollToSection(e, "#signature")}>
              Signature
            </a>
          </li>
          <li>
            <a href="#testimonials" onClick={(e) => scrollToSection(e, "#testimonials")}>
              Stories
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => scrollToSection(e, "#contact")}>
              Contact
            </a>
          </li>
          {/* Route navigation to Store */}
          <li>
  <Link
    to="/store"
    className="store-btn"
    onClick={() => {
      setMenuOpen(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }}
  >
    Visit Store
  </Link>
</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
