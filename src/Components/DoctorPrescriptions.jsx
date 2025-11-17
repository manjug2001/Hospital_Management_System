import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorPrescriptions.css";

const DoctorPrescriptions = () => {
  // Patients list (later dynamic from backend)
  const patients = [
    { id: 1, name: "Manju Kumar", age: 24, gender: "Male" },
    { id: 2, name: "Priya Sharma", age: 28, gender: "Female" },
    { id: 3, name: "Rohit Singh", age: 31, gender: "Male" },
  ];

  const [selectedPatient, setSelectedPatient] = useState(null);

  // Prescription data
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      patient: "Manju Kumar",
      date: "2025-11-12",
      diagnosis: "Fever & Body Pain",
      medicines: "Paracetamol 650mg - 3 days",
      notes: "Drink enough water",
      file: "/prescriptions/prescription1.pdf",
    },
    {
      id: 2,
      patient: "Priya Sharma",
      date: "2025-10-28",
      diagnosis: "Skin Allergy",
      medicines: "Cetirizine - 5 days",
      notes: "Avoid spicy food",
      file: "/prescriptions/prescription2.pdf",
    },
  ]);

  const [newRx, setNewRx] = useState({
    diagnosis: "",
    medicines: "",
    notes: "",
  });

  const handleSelectPatient = (e) => {
    const patientId = Number(e.target.value);
    const selected = patients.find((p) => p.id === patientId);
    setSelectedPatient(selected);
  };

  const handleChange = (e) => {
    setNewRx({ ...newRx, [e.target.name]: e.target.value });
  };

  const handleCreatePrescription = (e) => {
    e.preventDefault();

    if (!selectedPatient) {
      alert("Please select a patient first!");
      return;
    }

    const newPrescription = {
      id: prescriptions.length + 1,
      patient: selectedPatient.name,
      diagnosis: newRx.diagnosis,
      medicines: newRx.medicines,
      notes: newRx.notes,
      date: new Date().toISOString().slice(0, 10),
      file: "#", // placeholder
    };

    setPrescriptions([...prescriptions, newPrescription]);

    alert("Prescription created successfully!");

    setNewRx({
      diagnosis: "",
      medicines: "",
      notes: "",
    });
  };

  return (
    <div className="doctor-rx-page">
      <DoctorHeader />

      <main className="doctor-rx-main">
        <h2 className="rx-heading">Prescription Management</h2>
        <p className="rx-subheading">
          Create digital prescriptions and manage existing ones.
        </p>

        {/* ================= Select Patient ================= */}
        <div className="patient-select-box">
          <h3>Select Patient</h3>

          <select onChange={handleSelectPatient} defaultValue="">
            <option value="" disabled>
              -- Select Patient --
            </option>
            {patients.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.age} yrs)
              </option>
            ))}
          </select>

          {selectedPatient && (
            <div className="patient-info">
              <p><b>Name:</b> {selectedPatient.name}</p>
              <p><b>Age:</b> {selectedPatient.age}</p>
              <p><b>Gender:</b> {selectedPatient.gender}</p>
            </div>
          )}
        </div>

        {/* ================= Prescription Form ================= */}
        {selectedPatient && (
          <form className="rx-form" onSubmit={handleCreatePrescription}>
            <h3>Create Prescription for {selectedPatient.name}</h3>

            <textarea
              name="diagnosis"
              placeholder="Diagnosis"
              value={newRx.diagnosis}
              onChange={handleChange}
              required
              rows="2"
            />

            <textarea
              name="medicines"
              placeholder="Medicines (with dosage)"
              value={newRx.medicines}
              onChange={handleChange}
              required
              rows="3"
            />

            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={newRx.notes}
              onChange={handleChange}
              rows="2"
            />

            <button type="submit" className="create-btn">
              Save Prescription
            </button>
          </form>
        )}

        {/* ================= Prescription Table ================= */}
        <h3 className="rx-list-title">All Prescriptions</h3>

        <div className="rx-table-wrapper">
          <table className="rx-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Diagnosis</th>
                <th>Medicines</th>
                <th>Notes</th>
                <th>File</th>
              </tr>
            </thead>

            <tbody>
              {prescriptions.map((rx, index) => (
                <tr key={rx.id}>
                  <td>{index + 1}</td>
                  <td>{rx.patient}</td>
                  <td>{rx.date}</td>
                  <td>{rx.diagnosis}</td>
                  <td>{rx.medicines}</td>
                  <td>{rx.notes}</td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => window.open(rx.file, "_blank")}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {prescriptions.length === 0 && (
            <p className="no-rx">No prescriptions found.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorPrescriptions;
