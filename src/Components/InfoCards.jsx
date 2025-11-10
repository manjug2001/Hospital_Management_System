import React from "react";
import "./InfoCards.css";
import { useNavigate } from "react-router-dom";

const InfoCards = () => {
  const navigate = useNavigate();

  return (
    <div className="info-section">
      <h2 className="info-heading">We Offer Specialized Care</h2>
      <p className="info-subheading">Dedicated to your health and well-being</p>

      <div className="info-card-container">
        {/* Card 1 - About Us */}
        <div className="info-card">
          <img src="https://cdn-icons-png.flaticon.com/512/847/847969.png" alt="About" />
          <h3>About Us</h3>
          <p>
            Learn more about MedNXT — our mission, values, and our commitment to providing
            quality healthcare for all.
          </p>
          <button className="info-btn" onClick={() => navigate("/about")}>
            Learn More »
          </button>
        </div>

        {/* Card 2 - Our Services */}
        <div className="info-card">
          <img src="https://cdn-icons-png.flaticon.com/512/2966/2966327.png" alt="Services" />
          <h3>Our Services</h3>
          <p>
            Explore our wide range of medical services, including diagnostics, consultations,
            and specialized treatments.
          </p>
          <button className="info-btn" onClick={() => navigate("/services")}>
            View Services »
          </button>
        </div>

        {/* Card 3 - Doctors */}
        <div className="info-card">
          <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png" alt="Doctors" />
          <h3>Doctors</h3>
          <p>
            Meet our team of expert and experienced doctors committed to providing the best
            healthcare and guidance for your family.
          </p>
          <button className="info-btn" onClick={() => navigate("/doctors")}>
            Meet Doctors »
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;