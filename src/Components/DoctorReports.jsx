import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorReports.css";

const DoctorReports = () => {
  // Dummy Patients
  const patients = [
    "Manju Kumar",
    "Priya Sharma",
    "Rohit Singh",
    "Asha Devi",
  ];

  const [selectedPatient, setSelectedPatient] = useState("");

  const [reports, setReports] = useState([
    {
      id: 1,
      patient: "Manju Kumar",
      reportName: "Blood Test",
      date: "2025-10-10",
      file: "/reports/manju_bloodtest.pdf",
    },
    {
      id: 2,
      patient: "Manju Kumar",
      reportName: "ECG Report",
      date: "2025-09-20",
      file: "/reports/manju_ecg.pdf",
    },
    {
      id: 3,
      patient: "Priya Sharma",
      reportName: "X-Ray Chest",
      date: "2025-09-12",
      file: "/reports/priya_xray.pdf",
    },
  ]);

  const [newReport, setNewReport] = useState({
    reportName: "",
    file: null,
  });

  const handleAddReport = (e) => {
    e.preventDefault();

    if (!selectedPatient) {
      alert("Please select a patient first!");
      return;
    }

    if (!newReport.reportName || !newReport.file) {
      alert("Please enter report name and select a file.");
      return;
    }

    const fileUrl = URL.createObjectURL(newReport.file);

    const newEntry = {
      id: reports.length + 1,
      patient: selectedPatient,
      reportName: newReport.reportName,
      date: new Date().toISOString().slice(0, 10),
      file: fileUrl,
    };

    setReports([...reports, newEntry]);

    alert("Report added successfully!");

    // Reset form
    setNewReport({ reportName: "", file: null });
  };

  const filteredReports = reports.filter(
    (r) => r.patient === selectedPatient
  );

  return (
    <div className="doctor-reports-page">
      <DoctorHeader />

      <main className="doctor-reports-main">
        <h2 className="reports-heading">Patient Reports</h2>
        <p className="reports-subheading">Select a patient to view or upload reports.</p>

        {/* === Select Patient === */}
        <div className="patient-select-box">
          <select
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
          >
            <option value="">-- Select Patient --</option>
            {patients.map((p, index) => (
              <option key={index} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>

        {/* ----------- Upload Report Form ------------ */}
        {selectedPatient && (
          <form className="report-upload-box" onSubmit={handleAddReport}>
            <h3>Upload Report for {selectedPatient}</h3>

            <input
              type="text"
              placeholder="Report Name"
              value={newReport.reportName}
              name="reportName"
              onChange={(e) =>
                setNewReport({ ...newReport, reportName: e.target.value })
              }
              required
            />

            <input
              type="file"
              accept=".pdf"
              onChange={(e) =>
                setNewReport({ ...newReport, file: e.target.files[0] })
              }
              required
            />

            <button type="submit" className="upload-btn">
              Upload Report
            </button>
          </form>
        )}

        {/* ----------- Reports Table ------------ */}
        {selectedPatient && (
          <div className="reports-table-wrapper">
            <h3 className="reports-list-title">
              Reports for {selectedPatient}
            </h3>

            {filteredReports.length > 0 ? (
              <table className="reports-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Report Name</th>
                    <th>Date</th>
                    <th>View</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredReports.map((report, index) => (
                    <tr key={report.id}>
                      <td>{index + 1}</td>
                      <td>{report.reportName}</td>
                      <td>{report.date}</td>
                      <td>
                        <button
                          className="view-btn"
                          onClick={() => window.open(report.file, "_blank")}
                        >
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="no-results">No reports for this patient.</p>
            )}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default DoctorReports;
