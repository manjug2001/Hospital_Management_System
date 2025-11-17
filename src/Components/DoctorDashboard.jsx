import React, { useEffect, useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorDashboard.css";
import { useNavigate } from "react-router-dom";

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const adminFlag = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminFlag);
  }, []);

  // Common doctor functionalities
  const doctorSections = [

    {
      id: 2,
      title: "Appointments",
      description: "View, approve, and manage all your patient appointments.",
      icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
      path: "/doctor-appointments",
    },
    {
      id: 3,
      title: "Patients",
      description: "View and manage your patient list with their medical history.",
      icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
      path: "/doctor-patients",
    },
    {
      id: 4,
      title: "Prescriptions",
      description: "Create and manage digital prescriptions for patients.",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      path: "/doctor-prescriptions",
    },
    {
      id: 5,
      title: "Reports & Records",
      description: "Upload and review lab reports and visit summaries.",
      icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      path: "/doctor-reports",
    },
    {
      id: 6,
      title: "Earnings & Billing",
      description: "View your consultation earnings and download reports.",
      icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png",
      path: "/doctor-billing",
    },
  ];

  // Extra functionalities for admin doctor
  const adminSections = [
    {
      id: 7,
      title: "Doctor Management",
      description: "Add, edit, activate, or remove doctors in the system.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
      path: "/admin-doctors",
    },
    {
      id: 8,
      title: "Patient Management",
      description: "View, edit, or assign patients to specific doctors.",
      icon: "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
      path: "/admin-patients",
    },
    {
      id: 9,
      title: "Staff Management",
      description: "Manage hospital staff roles, schedules, and permissions.",
      icon: "https://cdn-icons-png.flaticon.com/512/1250/1250590.png",
      path: "/admin-staff",
    },
  ];

  const finalSections = isAdmin
    ? [...doctorSections, ...adminSections]
    : doctorSections;

  return (
    <div className="doctor-dashboard-wrapper">
      <DoctorHeader />
      <main className="doctor-dashboard-main">
        <h2 className="doctor-dashboard-heading">
          {isAdmin ? "Welcome, Admin Doctor 👨‍⚕️" : "Welcome, Doctor 👨‍⚕️"}
        </h2>
        <p className="doctor-dashboard-subheading">
          {isAdmin
            ? "Manage doctors, patients, and system operations efficiently."
            : "Manage your appointments, patients, and records efficiently."}
        </p>

        <div className="doctor-dashboard-grid">
          {finalSections.map((section) => (
            <div
              key={section.id}
              className="doctor-dashboard-card"
              onClick={() => navigate(section.path)}
            >
              <img src={section.icon} alt={section.title} />
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <button className="doctor-dashboard-btn">Open</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DoctorDashboard;
