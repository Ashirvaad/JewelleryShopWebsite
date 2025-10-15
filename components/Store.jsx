import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import products from "../data/products"; 
import "./Store.css";

const Store = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [quoteItem, setQuoteItem] = useState(null); // For Get Quote modal
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [showSuccess, setShowSuccess] = useState(false); // For success animation

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Product descriptions
  const productDescriptions = {
    "Bridal Necklace": "A magnificent bridal necklace handcrafted in 22K gold and encrusted with fine-cut diamonds.",
    "Diamond Bangles": "Dazzling diamond bangles in 18K gold, designed for elegance and sparkle.",
    "Diamond Ring": "A timeless solitaire ring that reflects purity and sophistication.",
    "Emarald Pendant": "A stunning emerald pendant symbolizing prosperity and grace.",
    "Emarald Ring": "An exquisite emerald ring set in 18K gold, blending tradition with modern artistry.",
    "Peacock Necklace": "Inspired by royal heritage, the Peacock Necklace embodies beauty and luxury.",
    "Pearl Necklace": "Classic elegance meets luxury — lustrous pearls arranged to perfection.",
    "Pearl Crown": "A majestic crown adorned with cultured pearls, handcrafted for ceremonial grandeur.",
    "Gold Pendant": "Minimalist yet opulent — a 22K gold pendant that complements every occasion.",
    "Gold Ring": "A refined gold ring, polished to perfection — understated luxury.",
    "Royal Necklace": "The Royal Necklace brings together intricate goldwork and rare gems.",
    "Ruby Pendant": "A vibrant ruby centerpiece set in finely carved gold.",
    "Gold Necklace": "A classic 22K gold necklace, handcrafted with detail and elegance.",
    "Silver Necklace": "Modern luxury in sterling silver — simple, sleek, and stunningly graceful.",
  };

  const handleQuoteChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    // Show success animation
    setShowSuccess(true);

    // Hide modal and reset form after 2 seconds
    setTimeout(() => {
      setShowSuccess(false);
      setFormData({ name: "", email: "", phone: "" });
      setQuoteItem(null);
    }, 2000);
  };

  return (
    <div className="store-page">
      <Navbar />

      {/* Hero */}
      <section className="store-hero">
        <h1>Our Signature Collection</h1>
        <p>Experience the art of timeless craftsmanship</p>
      </section>

      {/* Product Grid */}
      <section className="store-grid">
        {products.map((item) => (
          <div className="store-item" key={item.id}>
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p className="price">{item.price}</p>

            <div className="store-buttons">
              <button
                className="view-details"
                onClick={() => setSelectedItem(item)}
              >
                View Details
              </button>
              <button
                className="quote-btn"
                onClick={() => setQuoteItem(item)}
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* View Details Modal */}
      {selectedItem && (
        <div className="modal-overlay" onClick={() => setSelectedItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelectedItem(null)}>
              ✕
            </button>
            <img src={selectedItem.image} alt={selectedItem.name} />
            <h2>{selectedItem.name}</h2>
            <p>{productDescriptions[selectedItem.name] || "Exquisite jewellery piece."}</p>
            <span className="price-range">{selectedItem.price}</span>
          </div>
        </div>
      )}

      {/* Get Quote Modal */}
      {quoteItem && (
        <div className="modal-overlay" onClick={() => setQuoteItem(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setQuoteItem(null)}>
              ✕
            </button>
            <h2>Request a Quote</h2>
            <form className="quote-form" onSubmit={handleQuoteSubmit}>
              {/* Auto-filled Product Name */}
              <input
                type="text"
                name="product"
                value={quoteItem.name}
                readOnly
              />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleQuoteChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleQuoteChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleQuoteChange}
                required
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      {/* Success Animation */}
      {showSuccess && (
        <div className="success-overlay">
          <div className="success-popup">✓ Quote Request Submitted!</div>
        </div>
      )}
    </div>
  );
};

export default Store;
