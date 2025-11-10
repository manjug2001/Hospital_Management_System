import React from "react";
import "./HeroSection.css";
import doctorImg from "../assets/doctors.AVIF"; // <-- place your doctor image inside src/assets/

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h4 className="hero-subtitle">Best Medical Clinic</h4>
        <h1 className="hero-title">
          Bringing <span>Health</span> To Life For The Whole Family...
        </h1>
        <p className="hero-text">
          Providing trusted healthcare with world-class doctors, advanced facilities, and personalized care for your family.
        </p>
        <button className="hero-btn">Get Appointments »</button>
      </div>
      <div className="hero-image">
        <img src={doctorImg} alt="Doctors" />
      </div>
    </div>
  );
};

export default HeroSection;