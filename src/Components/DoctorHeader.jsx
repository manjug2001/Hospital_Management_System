import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorHeader.css";

const DoctorHeader = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const adminFlag = localStorage.getItem("isAdmin") === "true";
    setIsAdmin(adminFlag);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAdmin");
    navigate("/");
    window.location.reload();
  };

  const handleProfileClick = () => {
    if (isAdmin) navigate("/admin-profile");
    else navigate("/doctor-profile");
  };

  return (
    <header className={`doctor-header ${scrolled ? "scrolled" : ""}`}>
      <div className="doctor-header-container">

        {/* === Logo === */}
        <div
          className="doctor-logo"
          onClick={() => navigate("/doctor-dashboard")}
          style={{ cursor: "pointer" }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path d="M3 12h18" stroke="#0aa1ae" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 3v18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h1>
            Med<span className="highlight">NXT</span>{" "}
            <span className="doctor-label">{isAdmin ? "Admin" : "Doctor"}</span>
          </h1>
        </div>

        {/* === Navigation Links === */}
        <ul className="doctor-nav-links">
          <li onClick={() => navigate("/doctor-dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/doctor-appointments")}>Appointments</li>
          <li onClick={() => navigate("/doctor-patients")}>Patients</li>
          <li onClick={() => navigate("/doctor-reports")}>Reports</li>
          <li onClick={() => navigate("/doctor-profile")}>Profile</li>

          {/* === Admin-Only Links === */}
          {isAdmin && (
            <>
              <li onClick={() => navigate("/admin-doctors")}>Manage Doctors</li>
              <li onClick={() => navigate("/admin-patients")}>Manage Patients</li>
              <li onClick={() => navigate("/admin-staff")}>Manage Staffs</li>
            </>
          )}
        </ul>

        {/* === Right Section (Profile Icon + Logout) === */}
        <div className="doctor-nav-right">
          {/* 👉 Profile Icon */}
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="Profile"
            className="doctor-profile-icon"
            onClick={handleProfileClick}
          />

          {/* Logout Button */}
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>

      </div>
    </header>
  );
};

export default DoctorHeader;
