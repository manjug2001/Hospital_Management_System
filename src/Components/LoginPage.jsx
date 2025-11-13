import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaStethoscope,
  FaHeart,
  FaAmbulance,
  FaPills,
  FaProcedures,
  FaSyringe,
  FaNotesMedical,
  FaUserMd,
} from "react-icons/fa";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mobile: "",
    password: "",
    role: "patient", // 👈 new field for login type
  });

  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // --- Simulated authentication ---
    if (formData.mobile && formData.password) {
      setSubmitted(true);
      setError("");

      // ✅ Save login status & role
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", formData.role);

      // ✅ Redirect based on role
if (formData.role === "doctor") {
  // Example: Make the first doctor admin (you can later fetch this from DB)
  if (formData.mobile === "9999999999") {
    localStorage.setItem("isAdmin", "true");
  } else {
    localStorage.setItem("isAdmin", "false");
  }
  navigate("/doctor-dashboard");
} else {
  localStorage.setItem("isAdmin", "false");
  navigate("/dashboard");
}
    } else {
      setError("Please enter both mobile number and password.");
    }
  };

  // Background setup
  useEffect(() => {
    document.body.classList.add("login-bg");
    return () => document.body.classList.remove("login-bg");
  }, []);

  return (
    <div className="login-bg">
      <div className="signup-wrapper">
        {/* Left Section */}
        <div className="signup-left">
          <div className="signup-title">HOSPITAL</div>
          <div className="signup-desc">Management Service</div>

          <form className="signup-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            {/* 👇 Role Selection Dropdown */}
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="patient">Login as Patient</option>
              <option value="doctor">Login as Doctor</option>
            </select>

            <div className="login-extra-row">
              <label className="remember-label">
                <input type="checkbox" style={{ marginRight: 4 }} /> Remember me
              </label>
              <span
                className="forgot-link"
                onClick={() => navigate("/forget-password")}
              >
                Forgot Password?
              </span>
            </div>

            <button type="submit">Login</button>
          </form>

          {error && <div className="registration-details">{error}</div>}

          {submitted && (
            <div className="registration-details">
              <b>Login Successful!</b>
              <br />
              Role: {formData.role === "doctor" ? "Doctor" : "Patient"}
            </div>
          )}

          {formData.role === "patient" && (
            <div className="signup-link-row">
              Don’t have an account?{" "}
              <span
                className="signup-link"
                onClick={() => navigate("/signup")}
              >
                Signup as Patient
              </span>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="signup-right">
          <div className="hospital-circle">
            <span className="circle-title">HOSPITAL Management Service</span>
            <span className="circle-icon icon1">
              <FaStethoscope size={28} />
            </span>
            <span className="circle-icon icon2">
              <FaHeart size={28} />
            </span>
            <span className="circle-icon icon3">
              <FaAmbulance size={28} />
            </span>
            <span className="circle-icon icon4">
              <FaSyringe size={28} />
            </span>
            <span className="circle-icon icon5">
              <FaPills size={28} />
            </span>
            <span className="circle-icon icon6">
              <FaUserMd size={28} />
            </span>
            <span className="circle-icon icon7">
              <FaNotesMedical size={28} />
            </span>
            <span className="circle-icon icon8">
              <FaProcedures size={28} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
