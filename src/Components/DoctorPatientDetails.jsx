import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorPatientDetails.css";

const DoctorPatientDetails = () => {
  const [selectedTab, setSelectedTab] = useState("details");

  // Dummy Static Data (Later dynamic from DB)
  const patient = {
    name: "Manoj Kumar",
    age: 32,
    gender: "Male",
    contact: "9876543210",
    email: "manoj@example.com",
    address: "Bengaluru, India",
    bloodGroup: "O+",
  };

  const visitHistory = [
    { id: 1, date: "2025-10-12", doctor: "Dr. Ramesh", diagnosis: "Fever", notes: "Basic medication" },
    { id: 2, date: "2025-09-22", doctor: "Dr. Anjali", diagnosis: "Skin Allergy", notes: "Cream recommended" },
  ];

  const reports = [
    { id: 1, name: "Blood Test", date: "2025-10-10", file: "#" },
    { id: 2, name: "X-Ray", date: "2025-08-14", file: "#" },
  ];

  return (
    <div className="patient-details-page">
      <DoctorHeader />

      <main className="patient-container">
        <h2 className="page-heading">Patient Information</h2>

        {/* Tabs */}
        <div className="tabs">
          <button className={selectedTab === "details" ? "tab active" : "tab"} onClick={() => setSelectedTab("details")}>
            Details
          </button>
          <button className={selectedTab === "history" ? "tab active" : "tab"} onClick={() => setSelectedTab("history")}>
            Visit History
          </button>
          <button className={selectedTab === "reports" ? "tab active" : "tab"} onClick={() => setSelectedTab("reports")}>
            Reports
          </button>
        </div>

        {/* === Patient Details === */}
        {selectedTab === "details" && (
          <div className="details-section">
            <div className="details-card">
              <p><b>Name:</b> {patient.name}</p>
              <p><b>Age:</b> {patient.age}</p>
              <p><b>Gender:</b> {patient.gender}</p>
              <p><b>Contact:</b> {patient.contact}</p>
              <p><b>Email:</b> {patient.email}</p>
              <p><b>Blood Group:</b> {patient.bloodGroup}</p>
              <p><b>Address:</b> {patient.address}</p>
            </div>
          </div>
        )}

        {/* === Visit History === */}
        {selectedTab === "history" && (
          <div className="history-section">
            <table className="history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Doctor</th>
                  <th>Diagnosis</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                {visitHistory.map((visit) => (
                  <tr key={visit.id}>
                    <td>{visit.date}</td>
                    <td>{visit.doctor}</td>
                    <td>{visit.diagnosis}</td>
                    <td>{visit.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* === Reports Section === */}
        {selectedTab === "reports" && (
          <div className="reports-section">
            <table className="reports-table">
              <thead>
                <tr>
                  <th>Report</th>
                  <th>Date</th>
                  <th>Download</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.name}</td>
                    <td>{report.date}</td>
                    <td>
                      <button className="download-btn">Download</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DoctorPatientDetails;
