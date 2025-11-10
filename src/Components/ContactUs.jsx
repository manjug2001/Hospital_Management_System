import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-wrapper">
      <Header />
      {/* <Navbar /> */}

      <div className="contact-content">
        <div className="contact-top">
          <h2 className="contact-title">Contact Us</h2>
          <p className="contact-subtitle">
            We'd love to hear from you! Fill out the form or visit us at our location.
          </p>
        </div>

        <div className="contact-section">
          <div className="contact-form">
            <h3>Get in Touch</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea rows="4" placeholder="Your Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-details">
            <h3>Our Office</h3>
            <p>📍 123 Health Street, Bengaluru, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ info@healthcare.com</p>
          </div>
        </div>

        <div className="map-container">
          <h3>Find Us on Google Maps</h3>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.879809924235!2d77.59456251536805!3d12.971598790858537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f5b7b9cf%3A0x24d95fba8d3db0b1!2sBengaluru!5e0!3m2!1sen!2sin!4v1666166166166"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
