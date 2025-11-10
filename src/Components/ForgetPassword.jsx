import React, { useState } from "react";
import {
  FaStethoscope, FaHeart, FaAmbulance, FaPills,
  FaProcedures, FaSyringe, FaNotesMedical, FaUserMd
} from "react-icons/fa";
import "./LoginPage.css"; // Reuse the same CSS
import { useEffect } from "react";

function ForgetPassword() {
  const [formData, setFormData] = useState({
    phone: "",
    email: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.phone ||
      !formData.email ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      setError("All fields are required.");
    } else if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setSubmitted(true);
      setError("");
    }
  };
      useEffect(() => {
      document.body.classList.add("login-bg");
      return () => {
        document.body.classList.remove("login-bg");
      };
    }, []);

  return (
    <div className="login-bg">
    <div className="signup-wrapper">
      <div className="signup-left">
        <div className="signup-title">Forgot Password</div>
        <div className="signup-desc">Hospital Management Service</div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="newPassword"
            placeholder="New Password"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button type="submit">Reset Password</button>
        </form>
        {error && <div className="registration-details">{error}</div>}
        {submitted && (
          <div className="registration-details">
            <b>Password reset successful!</b>
            <br />
            Please login with your new password.
          </div>
        )}
      </div>
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

export default ForgetPassword;
