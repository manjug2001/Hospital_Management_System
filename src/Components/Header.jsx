import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.remove("about-page");
    if (location.pathname === "/about") {
      document.body.classList.add("about-page");
    }
  }, [location]);

  return (
    <header className="header">
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div
          className="logo-section"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 12h18"
                stroke="#0aa1ae"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 3v18"
                stroke="#ef4444"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h1 className="logo-text">
            Med<span className="highlight">NXT</span>
          </h1>
        </div>

        <ul className="navbar-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/doctors")}>Doctors</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>

        <div className="navbar-actions">
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
        </div>
      </nav>
    </header>
  );
}
