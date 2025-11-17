import React, { useState, useEffect } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./AdminPatients.css";

const AdminPatients = () => {
  const [search, setSearch] = useState("");
  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editPatient, setEditPatient] = useState(null);

  // Load patient + doctor records
  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem("patientsList")) || [];
    const storedDoctors = JSON.parse(localStorage.getItem("doctorsList")) || [];

    setPatients(storedPatients);
    setDoctors(storedDoctors);
  }, []);

  // Save updated patient list
  useEffect(() => {
    localStorage.setItem("patientsList", JSON.stringify(patients));
  }, [patients]);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Open Edit form
  const openEditModal = (p) => {
    setEditPatient(p);
    setModalOpen(true);
  };

  // Delete patient
  const deletePatient = (id) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      const updated = patients.filter((p) => p.id !== id);
      setPatients(updated);
      localStorage.setItem("patientsList", JSON.stringify(updated));
    }
  };

  // Save patient edits
  const handleSavePatient = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedPatient = {
      ...editPatient,
      name: form.name.value,
      age: form.age.value,
      gender: form.gender.value,
      contact: form.contact.value,
      assignedDoctor: form.assignedDoctor.value,
    };

    setPatients(
      patients.map((p) => (p.id === editPatient.id ? updatedPatient : p))
    );

    setModalOpen(false);
  };

  return (
    <div className="admin-patient-page">
      <DoctorHeader />

      <main className="admin-patient-main">
        <h2 className="admin-patient-heading">Patient Management</h2>
        <p className="admin-patient-subheading">
          View, edit, and assign patients to doctors.
        </p>

        {/* Search Bar */}
        <div className="patient-top-bar">
          <input
            type="text"
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Patient Table */}
        <div className="patient-table-wrapper">
          <table className="patient-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Assigned Doctor</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredPatients.map((p, index) => (
                <tr key={p.id}>
                  <td>{index + 1}</td>
                  <td>{p.name}</td>
                  <td>{p.age}</td>
                  <td>{p.gender}</td>
                  <td>{p.contact}</td>
                  <td>{p.assignedDoctor || "Not Assigned"}</td>

                  <td className="actions-col">
                    <button className="edit-btn" onClick={() => openEditModal(p)}>
                      Edit
                    </button>

                    <button className="delete-btn" onClick={() => deletePatient(p.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredPatients.length === 0 && (
            <p className="no-results">No patients found.</p>
          )}
        </div>
      </main>

      {/* Edit Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Edit Patient</h3>

            <form onSubmit={handleSavePatient}>
              <input
                name="name"
                placeholder="Full Name"
                defaultValue={editPatient?.name}
                required
              />

              <input
                name="age"
                type="number"
                placeholder="Age"
                defaultValue={editPatient?.age}
                required
              />

              <select name="gender" defaultValue={editPatient?.gender}>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <input
                name="contact"
                placeholder="Contact Number"
                defaultValue={editPatient?.contact}
                required
              />

              {/* Assign Doctor */}
              <select
                name="assignedDoctor"
                defaultValue={editPatient?.assignedDoctor || ""}
              >
                <option value="">-- Assign Doctor --</option>
                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name} ({doc.specialization})
                  </option>
                ))}
              </select>

              <div className="modal-actions">
                <button className="save-btn" type="submit">
                  Save
                </button>
                <button className="cancel-btn" onClick={() => setModalOpen(false)}>
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

export default AdminPatients;
