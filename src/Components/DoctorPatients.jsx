import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorPatients.css";

const DoctorPatients = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Manju Kumar",
      age: 24,
      gender: "Male",
      contact: "9876543210",
      lastVisit: "2025-11-10",
    },
    {
      id: 2,
      name: "Priya Sharma",
      age: 28,
      gender: "Female",
      contact: "9871002334",
      lastVisit: "2025-11-05",
    },
    {
      id: 3,
      name: "Rohit Singh",
      age: 31,
      gender: "Male",
      contact: "9877631122",
      lastVisit: "2025-11-01",
    },
    {
      id: 4,
      name: "Asha Devi",
      age: 45,
      gender: "Female",
      contact: "9873322911",
      lastVisit: "2025-10-27",
    },
  ]);

  const filteredPatients = patients.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const deletePatient = (id) => {
    if (window.confirm("Are you sure you want to remove this patient?")) {
      setPatients(patients.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="patients-page">
      <DoctorHeader />

      <main className="patients-main">
        <h2 className="patients-heading">Patients</h2>
        <p className="patients-subheading">
          View and manage your patients and their medical details.
        </p>

        {/* Search Bar */}
        <div className="patients-filters">
          <input
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Patients Table */}
        <div className="patients-table-wrapper">
          <table className="patients-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Contact</th>
                <th>Last Visit</th>
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
                  <td>{p.lastVisit}</td>

                  <td className="actions-col">

                    {/* VIEW → Default Details tab */}
                    <button
                      className="view-btn"
                      onClick={() =>
                        navigate("/doctor-patient-details", {
                          state: { patientId: p.id, tab: "details" },
                        })
                      }
                    >
                      View
                    </button>

                    {/* HISTORY → Open History tab */}
                    <button
                      className="history-btn"
                      onClick={() =>
                        navigate("/doctor-patient-details", {
                          state: { patientId: p.id, tab: "history" },
                        })
                      }
                    >
                      History
                    </button>

                    {/* REPORTS → Open Reports tab */}
                    <button
                      className="reports-btn"
                      onClick={() =>
                        navigate("/doctor-patient-details", {
                          state: { patientId: p.id, tab: "reports" },
                        })
                      }
                    >
                      Reports
                    </button>

                    {/* DELETE patient */}
                    <button
                      className="delete-btn"
                      onClick={() => deletePatient(p.id)}
                    >
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

      <Footer />
    </div>
  );
};

export default DoctorPatients;
