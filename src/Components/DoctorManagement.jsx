import React, { useState, useEffect } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorManagement.css";

const DoctorManagement = () => {
  const [search, setSearch] = useState("");

  const [doctors, setDoctors] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editDoctor, setEditDoctor] = useState(null);

  // Load from localStorage
  useEffect(() => {
    const storedDoctors = JSON.parse(localStorage.getItem("doctorsList"));
    if (storedDoctors) setDoctors(storedDoctors);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("doctorsList", JSON.stringify(doctors));
  }, [doctors]);

  const filteredDoctors = doctors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditDoctor(null);
    setModalOpen(true);
  };

  const openEditModal = (doctor) => {
    setEditDoctor(doctor);
    setModalOpen(true);
  };

  const deleteDoctor = (id) => {
    if (window.confirm("Are you sure you want to delete this doctor?")) {
      setDoctors(doctors.filter((d) => d.id !== id));
    }
  };

  const handleSaveDoctor = (e) => {
    e.preventDefault();
    const form = e.target;

    const newDoctor = {
      id: editDoctor ? editDoctor.id : Date.now(),
      name: form.name.value,
      specialization: form.specialization.value,
      experience: form.experience.value,
      contact: form.contact.value,
      status: form.status.value,
      password: form.password.value,
      isAdmin: form.isAdmin.value === "true",
    };

    if (editDoctor) {
      setDoctors(doctors.map((d) => (d.id === editDoctor.id ? newDoctor : d)));
    } else {
      setDoctors([...doctors, newDoctor]);
    }

    setModalOpen(false);
  };

  return (
    <div className="admin-doctor-page">
      <DoctorHeader />

      <main className="admin-doctor-main">
        <h2 className="admin-doctor-heading">Doctor Management</h2>
        <p className="admin-doctor-subheading">Manage all doctors in the system</p>

        <div className="doctor-top-bar">
          <input
            type="text"
            placeholder="Search Doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="add-btn" onClick={openAddModal}>
            + Add Doctor
          </button>
        </div>

        <div className="doctor-table-wrapper">
          <table className="doctor-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Specialization</th>
                <th>Experience</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Admin</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDoctors.map((doc, idx) => (
                <tr key={doc.id}>
                  <td>{idx + 1}</td>
                  <td>{doc.name}</td>
                  <td>{doc.specialization}</td>
                  <td>{doc.experience}</td>
                  <td>{doc.contact}</td>
                  <td>
                    <span
                      className={
                        doc.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {doc.status}
                    </span>
                  </td>

                  <td>{doc.isAdmin ? "Yes" : "No"}</td>

                  <td className="actions-col">
                    <button className="edit-btn" onClick={() => openEditModal(doc)}>
                      Edit
                    </button>

                    <button className="delete-btn" onClick={() => deleteDoctor(doc.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredDoctors.length === 0 && (
            <p className="no-results">No doctors found.</p>
          )}
        </div>
      </main>

      {/* Add / Edit Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>{editDoctor ? "Edit Doctor" : "Add Doctor"}</h3>

            <form onSubmit={handleSaveDoctor}>
              <input name="name" placeholder="Full Name" defaultValue={editDoctor?.name} required />

              <input name="specialization" placeholder="Specialization" defaultValue={editDoctor?.specialization} required />

              <input name="experience" placeholder="Experience" defaultValue={editDoctor?.experience} required />

              <input name="contact" placeholder="Contact Number" defaultValue={editDoctor?.contact} required />

              <input name="password" placeholder="Set Doctor Password" defaultValue={editDoctor?.password} required />

              <select name="status" defaultValue={editDoctor?.status || "Active"}>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <select name="isAdmin" defaultValue={editDoctor?.isAdmin ? "true" : "false"}>
                <option value="false">Normal Doctor</option>
                <option value="true">Admin Doctor</option>
              </select>

              <div className="modal-actions">
                <button className="save-btn" type="submit">Save</button>
                <button className="cancel-btn" type="button" onClick={() => setModalOpen(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default DoctorManagement;
