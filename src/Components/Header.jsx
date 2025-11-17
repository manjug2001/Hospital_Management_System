import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [userRole, setUserRole] = useState(null); // 'patient', 'doctor', or null

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const role = localStorage.getItem("userRole");

    if (loggedIn && role) {
      setUserRole(role);
    } else {
      setUserRole(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userRole");
    localStorage.removeItem("isAdmin"); // if exists
    setUserRole(null);
    navigate("/");
    window.location.reload();
  };

  // Smart home button
  const handleHomeClick = () => {
    if (userRole === "patient") navigate("/dashboard");
    else if (userRole === "doctor") navigate("/doctor-dashboard");
    else navigate("/");
  };

  // Smart profile navigation
  const handleProfileClick = () => {
    if (userRole === "patient") navigate("/profile");
    else if (userRole === "doctor") navigate("/doctor-profile");
  };

  return (
    <header className="header">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>

        {/* Logo Section */}
        <div className="logo-section" onClick={handleHomeClick} style={{ cursor: "pointer" }}>
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M3 12h18" stroke="#0aa1ae" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 3v18" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="logo-text">
            Med<span className="highlight">NXT</span>
          </h1>
        </div>

        {/* Nav Links */}
        <ul className="navbar-links">
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/doctors")}>Doctors</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        {/* Right Side Buttons + Profile Icon */}
        <div className="navbar-actions">

          {/* If NOT logged in */}
          {!userRole ? (
            <>
              <button className="nav-btn login-btn" onClick={() => navigate("/login")}>
                Login
              </button>
              <button className="nav-btn signup-btn" onClick={() => navigate("/signup")}>
                Signup
              </button>
            </>
          ) : (
            <>
              {/* Profile Icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="Profile"
                className="profile-icon"
                onClick={handleProfileClick}
              />

              {/* Logout */}
              <button className="nav-btn logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
