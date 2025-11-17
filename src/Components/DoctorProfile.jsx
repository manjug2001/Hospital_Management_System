import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorProfile.css";

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState({
    name: "Dr. Ramesh Kumar",
    specialization: "Cardiologist",
    experience: "12",
    email: "ramesh.kumar@hospital.com",
    contact: "9876543210",
    timings: "10:00 AM - 4:00 PM",
    bio: "Experienced cardiologist with 12+ years of clinical expertise.",
    photo: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setDoctor({ ...doctor, photo: imgURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✔ Profile updated successfully!");
  };

  return (
    <div className="doctor-profile-page">
      <DoctorHeader />

      <main className="doctor-profile-main">
        <h2 className="doctor-profile-heading">Doctor Profile Management</h2>
        <p className="doctor-profile-subheading">
          Update your professional details & manage your availability.
        </p>

        <div className="doctor-profile-container">
          
          {/* === Left: Form === */}
          <form className="doctor-profile-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={doctor.name}
              onChange={handleChange}
              placeholder="Full Name"
            />

            <input
              type="text"
              name="specialization"
              value={doctor.specialization}
              onChange={handleChange}
              placeholder="Specialization"
            />

            <input
              type="number"
              name="experience"
              value={doctor.experience}
              onChange={handleChange}
              placeholder="Years of Experience"
            />

            <input
              type="email"
              name="email"
              value={doctor.email}
              onChange={handleChange}
              placeholder="Email Address"
            />

            <input
              type="text"
              name="contact"
              value={doctor.contact}
              onChange={handleChange}
              placeholder="Contact Number"
            />

            <input
              type="text"
              name="timings"
              value={doctor.timings}
              onChange={handleChange}
              placeholder="Consultation Timings"
            />

            <textarea
              name="bio"
              rows="3"
              value={doctor.bio}
              onChange={handleChange}
              placeholder="Short Bio"
            ></textarea>

            <button type="submit" className="update-btn">
              Update Profile
            </button>
          </form>

          {/* === Right: Photo === */}
          <div className="doctor-photo-section">
            <div className="photo-wrapper">
              <img
                src={doctor.photo}
                alt="Doctor"
                className="doctor-photo"
              />
            </div>

            <label htmlFor="upload-photo" className="upload-btn">
              Change Photo
            </label>
            <input
              type="file"
              id="upload-photo"
              accept="image/*"
              onChange={handlePhotoUpload}
              style={{ display: "none" }}
            />
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorProfile;
