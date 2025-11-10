import React from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      {/* <div className="navbar-left" onClick={() => navigate("/")}>
        <img
          src="/hospital-logo.png" // replace with your logo image path
          alt="Hospital Logo"
          className="navbar-logo"
        />
        <span className="navbar-title">Hospital Management</span>
      </div> */}

      <ul className="navbar-links">
        <li onClick={() => navigate("/")}>Home</li>
        <li onClick={() => navigate("/about")}>About Us</li>
        <li onClick={() => navigate("/doctors")}>Doctors</li>
        <li onClick={() => navigate("/contact")}>Contact</li>
      </ul>

      <div className="navbar-actions">
        <button className="nav-btn login-btn" onClick={() => navigate("/login")}>
          Login
        </button>
        <button className="nav-btn signup-btn" onClick={() => navigate("/signup")}>
          Signup
        </button>
      </div>
    </nav>
  );
}

export default Navbar;