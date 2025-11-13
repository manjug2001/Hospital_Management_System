import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./ProfileManagement.css";

const ProfileManagement = () => {
  const [profile, setProfile] = useState({
    name: "Manju Kumar",
    email: "manju@example.com",
    contact: "9876543210",
    gender: "Male",
    age: "24",
    address: "Bengaluru, India",
    photo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfile({ ...profile, photo: imageUrl });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <Header />

      <main className="profile-main">
        <h2 className="profile-heading">Profile Management</h2>
        <p className="profile-subheading">
          Update your personal details and manage your account securely.
        </p>

        <div className="profile-container">
          {/* Left Section – Form */}
          <form className="profile-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={profile.name}
              onChange={handleChange}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <input
              type="text"
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              required
            />
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              required
            >
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="number"
              name="age"
              value={profile.age}
              onChange={handleChange}
              placeholder="Age"
              required
            />
            <textarea
              name="address"
              value={profile.address}
              onChange={handleChange}
              placeholder="Address"
              rows="3"
            />
            <button type="submit" className="update-btn">
              Update Profile
            </button>
          </form>

          {/* Right Section – Profile Photo */}
          <div className="profile-photo-section">
            <div className="photo-wrapper">
              <img
                src={profile.photo}
                alt="Profile"
                className="profile-photo"
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

export default ProfileManagement;
