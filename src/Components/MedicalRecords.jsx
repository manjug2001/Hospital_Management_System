import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./MedicalRecords.css";
import { FaFilePdf, FaFileWord } from "react-icons/fa";

const MedicalRecords = () => {
  const [records] = useState([
    { id: 1, name: "Blood_Test_Report.pdf", type: "pdf" },
    { id: 2, name: "Xray_Scan_Result.pdf", type: "pdf" },
    { id: 3, name: "Prescription_June.docx", type: "word" },
    { id: 4, name: "MRI_Report.pdf", type: "pdf" },
    { id: 5, name: "Doctor_Notes.docx", type: "word" },
    { id: 6, name: "ECG_Report.pdf", type: "pdf" },
    { id: 7, name: "Allergy_Test.docx", type: "word" },
    { id: 8, name: "Medical_Summary.pdf", type: "pdf" },
  ]);

  return (
    <div className="records-page">
      <Header />
      <main className="records-main">
        <h2 className="records-heading">My Medical Files</h2>
        <p className="records-subheading">
          Access and download your medical documents securely.
        </p>

        <div className="file-grid">
          {records.map((file) => (
            <div key={file.id} className="file-card">
              <div className="file-icon">
                {file.type === "pdf" ? (
                  <FaFilePdf className="pdf-icon" />
                ) : (
                  <FaFileWord className="word-icon" />
                )}
              </div>
              <p className="file-name">{file.name}</p>
              <button className="file-btn">Download</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MedicalRecords;
