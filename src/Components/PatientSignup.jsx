import React, { useState } from "react";
import {
  FaStethoscope, FaHeart, FaAmbulance, FaPills,
  FaProcedures, FaSyringe, FaNotesMedical, FaUserMd
} from "react-icons/fa";
import "./PatientSignup.css";
import { useEffect } from "react";

function PatientSignup() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

    useEffect(() => {
    document.body.classList.add("Signup-bg");
    return () => {
      document.body.classList.remove("Signup-bg");
    };
  }, []);

  return (
    <div className="Signup-bg">
    <div className="signup-wrapper">
      <div className="signup-left">
        <div className="signup-title">HOSPITAL</div>
        <div className="signup-desc">Management Service</div>
        <form className="signup-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
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
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit">Register</button>
        </form>
        {submitted && (
          <div className="registration-details">
            <b>Registration Details</b>
            <br />
            Name: {formData.name}
            <br />
            Mobile: {formData.mobile}
            <br />
            Email: {formData.email}
            <br />
            Address: {formData.address}
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

export default PatientSignup;
