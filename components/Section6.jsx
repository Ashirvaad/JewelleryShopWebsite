import React from "react";
import "./Section6.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Section6 = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Visit Our Store</h2>
        <p className="contact-subtitle">
          Experience timeless elegance in person — step into the world of Shree Laxmi
          Jewellers.
        </p>

        <div className="contact-grid">
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="info-item">
              <FaMapMarkerAlt className="icon" />
              <div>
                <h3>Store Location</h3>
                <p>Shree Laxmi Jewellers, MG Road, Mumbai, India</p>
              </div>
            </div>
            <div className="info-item">
              <FaPhoneAlt className="icon" />
              <div>
                <h3>Call Us</h3>
                <p>+91 xxxxx xxxxx</p>
              </div>
            </div>
            <div className="info-item">
              <FaEnvelope className="icon" />
              <div>
                <h3>Email</h3>
                <p>info@shreelaxmijewellers.com (Dummy name)</p>
              </div>
            </div>
          </div>

          {/* Right: Map or Image */}
          <div className="contact-map">
            <iframe
              title="Shree Laxmi Jewellers Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.4259640058913!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1675fbc33b23%3A0xa9289d59b7b0122!2sMG%20Road%2C%20Bengaluru%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="contact-cta">
          <h3>Book Your Private Consultation</h3>
          <button className="cta-button">Schedule Appointment</button>
        </div>
      </div>
    </section>
  );
};

export default Section6;
