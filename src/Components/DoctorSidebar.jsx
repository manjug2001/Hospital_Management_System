import React from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";

const DoctorSidebar = ({ isAdmin }) => {
  const navigate = useNavigate();

  return (
    <aside className="doctor-sidebar">
      <h3>Doctor Panel</h3>
      <ul>
        <li onClick={() => navigate("/doctor-dashboard")}>🏠 Dashboard</li>
        <li onClick={() => navigate("/doctor-appointments")}>📅 Appointments</li>
        <li onClick={() => navigate("/doctor-patients")}>🧍 Patients</li>
        <li onClick={() => navigate("/doctor-prescriptions")}>💊 Prescriptions</li>
        <li onClick={() => navigate("/doctor-reports")}>📄 Reports</li>
        <li onClick={() => navigate("/doctor-profile")}>👨‍⚕️ Profile</li>

        {isAdmin && (
          <>
            <li className="sidebar-admin">⚙️ Admin Controls</li>
            <li onClick={() => navigate("/admin-doctors")}>👨‍⚕️ Manage Doctors</li>
            <li onClick={() => navigate("/admin-patients")}>🧑‍🤝‍🧑 Manage Patients</li>
            <li onClick={() => navigate("/admin-staff")}>👩‍🔬 Manage Staff</li>
          </>
        )}

        <li className="logout" onClick={() => navigate("/")}>
          🚪 Logout
        </li>
      </ul>
    </aside>
  );
};

export default DoctorSidebar;
