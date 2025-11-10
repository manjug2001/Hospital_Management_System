import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ---- Column 1: Logo and About ---- */}
        <div className="footer-col">
          <h2 className="footer-logo">medNXT</h2>
          <p>
            Your trusted healthcare partner. We bring advanced medical
            solutions and expert care to improve your well-being every day.
          </p>
        </div>

        {/* ---- Column 2: Quick Links ---- */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Doctors</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* ---- Column 3: Contact Info ---- */}
        <div className="footer-col">
          <h3>Contact Info</h3>
          <p>📍 12 North Street, New York 100</p>
          <p>📞 +91 9510357514</p>
          <p>📧 mednxt@gmail.com</p>
        </div>

        {/* ---- Column 4: Social Links ---- */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>

      {/* ---- Bottom Bar ---- */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} medNXT. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;