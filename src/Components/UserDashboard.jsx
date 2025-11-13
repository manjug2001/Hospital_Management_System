import React from "react";
import "./UserDashboard.css";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();

  const dashboardSections = [
    {
      id: 1,
      title: "Profile Management",
      description:
        "View and update your profile, change password, and manage your account details securely.",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      path: "/profile",
    },
    {
      id: 2,
      title: "Book Appointment",
      description:
        "Easily book appointments with your preferred doctors by department or specialization.",
      icon: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
      path: "/appointment",
    },
    {
      id: 3,
      title: "Manage Appointments",
      description:
        "View upcoming and past appointments, reschedule or cancel anytime.",
      icon: "https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
      path: "/appointments",
    },
   
    {
      id: 5,
      title: "Medical Records",
      description:
        "Access all your prescriptions, test results, and visit history in one secure place.",
      icon: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      path: "/records",
    },
    {
      id: 6,
      title: "Billing & Payments",
      description:
        "View bills, pay consultation fees, and download payment receipts instantly.",
      icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
      path: "/billing",
    },
   
   
  ];

  return (
    <div className="dashboard-wrapper">
      <Header />
      <main className="dashboard-main">
        <h2 className="dashboard-heading">Welcome to Your Dashboard</h2>
        <p className="dashboard-subheading">
          Manage your health, appointments, and records — all in one place.
        </p>

        <div className="dashboard-grid">
          {dashboardSections.map((section) => (
            <div
              key={section.id}
              className="dashboard-card"
              onClick={() => navigate(section.path)}
            >
              <img src={section.icon} alt={section.title} />
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <button className="dashboard-btn">Open</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UserDashboard;
