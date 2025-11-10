import React, { useState } from "react";
import "./Doctors.css";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ramesh from "../assets/ramesh.jpg";
import anjali from "../assets/anjali.jpeg";
import priya from "../assets/priya.jpeg";
import sanjay from "../assets/sanjay.jpeg";
import rajesh from "../assets/rajesh.jpeg";

const Doctors = () => {
  const [filter, setFilter] = useState("All");

  const doctorsData = [
    {
      id: 1,
      name: "Dr. Ramesh Kumar",
      specialist: "Cardiologist",
      experience: 12,
      description:
        "Expert in heart-related diseases and cardiac surgery with over a decade of successful treatments.",
      img: ramesh,
    },
    {
      id: 2,
      name: "Dr. Anjali Sharma",
      specialist: "Dermatologist",
      experience: 8,
      description:
        "Specialized in skin, hair, and nail disorders with modern dermatological practices.",
      img: anjali,
    },
    {
      id: 3,
      name: "Dr. Rajesh Patel",
      specialist: "Neurologist",
      experience: 15,
      description:
        "Renowned neurologist with extensive experience in treating brain and nervous system disorders.",
      img: rajesh,
    },
    {
      id: 4,
      name: "Dr. Priya Nair",
      specialist: "Gynecologist",
      experience: 10,
      description:
        "Providing compassionate care and specialized treatment in women’s health and maternity.",
      img: priya,
    },
    {
      id: 5,
      name: "Dr. Sanjay Mehta",
      specialist: "Orthopedic",
      experience: 9,
      description:
        "Experienced orthopedic surgeon focusing on joint replacements and sports injuries.",
      img: sanjay,
    },
  ];

  const filteredDoctors =
    filter === "All"
      ? doctorsData
      : doctorsData.filter((doc) => doc.specialist === filter);

  return (
    <div className="doctors-page">
      <Header />
      {/* <Navbar /> */}

      <main className="doctors-main">
        <h2 className="doctors-heading">Our Expert Doctors</h2>

        {/* Filter Section */}
        <div className="filter-section">
          <label htmlFor="specialist">Filter by Specialist: </label>
          <select
            id="specialist"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Orthopedic">Orthopedic</option>
          </select>
        </div>

        {/* Doctor Cards */}
        <div className="doctor-grid">
          {filteredDoctors.map((doctor) => (
            <div className="doctor-card" key={doctor.id}>
              <img src={doctor.img} alt={doctor.name} />
              <h3>{doctor.name}</h3>
              <p className="specialist">{doctor.specialist}</p>
              <p className="experience">{doctor.experience} Years Experience</p>
              <p className="description">{doctor.description}</p>
              <button className="book-btn">Book Appointment</button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Doctors;
