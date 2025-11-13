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
    setUserRole(null);
    navigate("/");
    window.location.reload();
  };

  // ✅ Smart Home Navigation (based on role)
  const handleHomeClick = () => {
    if (userRole === "patient") navigate("/dashboard");
    else if (userRole === "doctor") navigate("/doctor-dashboard");
    else navigate("/");
  };

  return (
    <header className="header">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {/* Logo + Title */}
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

        {/* Navbar Links */}
        <ul className="navbar-links">
          <li onClick={handleHomeClick}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/doctors")}>Doctors</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        {/* Navbar Buttons */}
        <div className="navbar-actions">
          {!userRole ? (
            <>
              <button
                className="nav-btn login-btn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="nav-btn signup-btn"
                onClick={() => navigate("/signup")}
              >
                Signup
              </button>
            </>
          ) : (
            <button className="nav-btn logout-btn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>
    </header>
  );
}
