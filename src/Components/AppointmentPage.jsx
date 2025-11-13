import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AppointmentPage.css";

const AppointmentPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    date: "",
    time: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.doctor || !formData.date || !formData.time) {
      alert("Please fill all required fields");
      return;
    }

    alert("Appointment booked successfully!");
    setFormData({ name: "", doctor: "", date: "", time: "", reason: "" });
  };

  return (
    <div className="appointment-page">
      <Header />

      <main className="appointment-main">
        <h2 className="appointment-heading">Book Your Appointment</h2>
        <p className="appointment-subtitle">
          Schedule your consultation with one of our expert doctors.
        </p>

        <div className="appointment-form-container">
          <form onSubmit={handleSubmit} className="appointment-form">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Select Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">-- Select Doctor --</option>
              <option value="Dr. Ramesh Kumar - Cardiologist">
                Dr. Ramesh Kumar - Cardiologist
              </option>
              <option value="Dr. Anjali Sharma - Dermatologist">
                Dr. Anjali Sharma - Dermatologist
              </option>
              <option value="Dr. Rajesh Patel - Neurologist">
                Dr. Rajesh Patel - Neurologist
              </option>
              <option value="Dr. Priya Nair - Gynecologist">
                Dr. Priya Nair - Gynecologist
              </option>
              <option value="Dr. Sanjay Mehta - Orthopedic">
                Dr. Sanjay Mehta - Orthopedic
              </option>
            </select>

            <label>Appointment Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <label>Appointment Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />

            <label>Reason for Appointment (optional)</label>
            <textarea
              name="reason"
              placeholder="Briefly describe your reason..."
              value={formData.reason}
              onChange={handleChange}
            ></textarea>

            <button type="submit" className="book-btn">
              Confirm Appointment
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AppointmentPage;
