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
    role: "patient",
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

    if (!formData.mobile || !formData.password) {
      setError("Please enter both mobile number and password.");
      return;
    }

    // ==== DOCTOR LOGIN ====
    if (formData.role === "doctor") {
      const doctors = JSON.parse(localStorage.getItem("doctorsList")) || [];

      const matched = doctors.find(
        (doc) =>
          doc.contact === formData.mobile &&
          doc.password === formData.password
      );

      if (!matched) {
        setError("Invalid doctor credentials!");
        return;
      }

      // Successful login for doctor
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "doctor");
      localStorage.setItem("doctorId", matched.id);
      localStorage.setItem("isAdmin", matched.isAdmin ? "true" : "false");

      navigate("/doctor-dashboard");
      return;
    }

    // ==== PATIENT LOGIN ====
    if (formData.role === "patient") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", "patient");
      localStorage.setItem("isAdmin", "false");

      navigate("/dashboard");
    }
  };

  useEffect(() => {
    document.body.classList.add("login-bg");
    return () => document.body.classList.remove("login-bg");
  }, []);

  return (
    <div className="login-bg">
      <div className="signup-wrapper">

        {/* Left */}
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

            {/* Stylish Select */}
            <div className="select-box">
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
              >
                <option value="patient">Login as Patient</option>
                <option value="doctor">Login as Doctor</option>
              </select>
            </div>

            <div className="login-extra-row">
              <label className="remember-label">
                <input type="checkbox" /> Remember me
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

        {/* Right Side */}
        <div className="signup-right">
          <div className="hospital-circle">
            <span className="circle-title">HOSPITAL Management Service</span>

            <span className="circle-icon icon1"><FaStethoscope size={28} /></span>
            <span className="circle-icon icon2"><FaHeart size={28} /></span>
            <span className="circle-icon icon3"><FaAmbulance size={28} /></span>
            <span className="circle-icon icon4"><FaSyringe size={28} /></span>
            <span className="circle-icon icon5"><FaPills size={28} /></span>
            <span className="circle-icon icon6"><FaUserMd size={28} /></span>
            <span className="circle-icon icon7"><FaNotesMedical size={28} /></span>
            <span className="circle-icon icon8"><FaProcedures size={28} /></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LoginPage;
