import React from "react";
import "./AboutUs.css";
import Header from "./Header";
// import Navbar from "./Navbar";
import Footer from "./Footer";
// import doctors_abt from "src/assets/doctors_abt"; // <-- place your about us image inside src/assets/
import doctors_abt from "../assets/doctors_abt.jpg"


function AboutUs() {
  return (

    <div className="about-page">
        <Header />
        {/* <Navbar /> */}
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-content">
          <h5 className="about-subtitle">Who We Are</h5>
          <h2 className="about-title">
            Caring For <span>Health</span> And Wellness Since 1990
          </h2>
          <p className="about-description">
            At <strong>MedNXT</strong>, we are dedicated to bringing world-class healthcare 
            closer to your family. Our team of experienced doctors and healthcare 
            professionals are committed to offering compassionate and personalized care 
            using the latest medical technologies.
          </p>
          <p className="about-description">
            From preventive care and diagnosis to specialized treatments, we focus on 
            building a healthier tomorrow — one patient at a time.
          </p>
        </div>

        <div className="about-image">
          <img
            src={doctors_abt}
            alt="MedNXT Doctors"
          />
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="about-mission">
        <div className="mission-card">
          <h3>Our Mission</h3>
          <p>
            To deliver accessible, affordable, and advanced healthcare solutions 
            that empower families to lead healthy, fulfilling lives.
          </p>
        </div>
        <div className="mission-card">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted healthcare provider by combining technology, 
            compassion, and clinical excellence.
          </p>
        </div>
        <div className="about-card">
          <h3>Ready To Experience World-Class Care?</h3>
          <p>
            <button className="about-btn">Book Appointment</button>
          </p>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="about-cta">
        <h2>Ready To Experience World-Class Care?</h2>
        <button className="about-btn">Book Appointment</button>
      </section> */}
      <Footer />
    </div>
  );
}

export default AboutUs;