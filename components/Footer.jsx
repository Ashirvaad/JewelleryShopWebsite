import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <h2>Padma Jewellers</h2>
          <p>Crafting timeless beauty, one jewel at a time.</p>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Links */}
        <div className="footer-links">
          <a href="#hero">Home</a>
          <a href="#collection">Collection</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
            <FaWhatsapp />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>© 2025 Padma Jewellers. All Rights Reserved.</p>
          <p className="credits">
            Designed with 💛 by <span>Ashirvaad Bhat</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
