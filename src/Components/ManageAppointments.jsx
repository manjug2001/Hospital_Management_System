import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ManageAppointments.css";

const ManageAppointments = () => {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctor: "Dr. Ramesh Kumar",
      specialization: "Cardiologist",
      date: "2025-11-15",
      time: "10:30 AM",
      status: "Upcoming",
      type: "In-person",
    },
    {
      id: 2,
      doctor: "Dr. Anjali Sharma",
      specialization: "Dermatologist",
      date: "2025-10-20",
      time: "02:00 PM",
      status: "Completed",
      type: "Video Consultation",
    },
    {
      id: 3,
      doctor: "Dr. Rajesh Patel",
      specialization: "Neurologist",
      date: "2025-11-22",
      time: "11:00 AM",
      status: "Upcoming",
      type: "In-person",
    },
    {
      id: 4,
      doctor: "Dr. Priya Nair",
      specialization: "Gynecologist",
      date: "2025-09-12",
      time: "09:45 AM",
      status: "Cancelled",
      type: "In-person",
    },
    {
      id: 5,
      doctor: "Dr. Sanjay Mehta",
      specialization: "Orthopedic",
      date: "2025-11-02",
      time: "03:15 PM",
      status: "Completed",
      type: "In-person",
    },
  ]);

  return (
    <div className="appointments-page">
      <Header />
      <main className="appointments-main">
        <h2 className="appointments-heading">Manage Appointments</h2>
        <p className="appointments-subheading">
          View your upcoming, completed, or cancelled appointments below.
        </p>

        <div className="appointments-list">
          {appointments.map((appt) => (
            <div key={appt.id} className="appointment-card">
              <div className="appointment-info">
                <h3>{appt.doctor}</h3>
                <p className="specialization">{appt.specialization}</p>
                <p>
                  <b>Date:</b> {appt.date}
                </p>
                <p>
                  <b>Time:</b> {appt.time}
                </p>
                <p>
                  <b>Type:</b> {appt.type}
                </p>
              </div>
              <div className="appointment-status">
                <span className={`status ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </span>
                {appt.status === "Upcoming" && (
                  <div className="appointment-actions">
                    <button className="reschedule-btn">Reschedule</button>
                    <button className="cancel-btn">Cancel</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ManageAppointments;
