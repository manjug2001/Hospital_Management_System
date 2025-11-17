import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "../Components/Footer";
import "./DoctorManageAppointments.css";


const DoctorAppointments = () => {
  const initialAppointments = [
    { id: 1, patient: "Manju Kumar", date: "2025-11-14", time: "10:30 AM", reason: "Chest Pain", status: "PENDING" },
    { id: 2, patient: "Priya Sharma", date: "2025-11-14", time: "11:15 AM", reason: "Skin Allergy", status: "ACCEPTED" },
    { id: 3, patient: "Rohit Singh", date: "2025-11-13", time: "2:00 PM", reason: "Headache", status: "COMPLETED" },
    { id: 4, patient: "Asha Devi", date: "2025-11-15", time: "4:30 PM", reason: "Orthopedic Checkup", status: "CANCELLED" },
  ];

  const [appointments, setAppointments] = useState(initialAppointments);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortField, setSortField] = useState("");
  const [page, setPage] = useState(1);

  const rowsPerPage = 3;

  // ➤ Search + Filter + Sort Logic
  const filteredAppointments = appointments
    .filter((a) => a.patient.toLowerCase().includes(search.toLowerCase()))
    .filter((a) => (filterDate ? a.date === filterDate : true))
    .filter((a) => (filterStatus ? a.status === filterStatus : true))
    .sort((a, b) => {
      if (!sortField) return 0;
      if (sortField === "patient") return a.patient.localeCompare(b.patient);
      if (sortField === "date") return new Date(a.date) - new Date(b.date);
      if (sortField === "status") return a.status.localeCompare(b.status);
      return 0;
    });

  // ➤ Pagination
  const start = (page - 1) * rowsPerPage;
  const paginatedData = filteredAppointments.slice(start, start + rowsPerPage);
  const totalPages = Math.ceil(filteredAppointments.length / rowsPerPage);

  const updateStatus = (id, newStatus) => {
    setAppointments((prev) =>
      prev.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  return (
    <>
      <DoctorHeader />

      <div className="appointments-page">
        <h2 className="appointments-heading">Manage Appointments</h2>
        <p className="appointments-subheading">
          View and manage all your scheduled appointments.
        </p>

        {/* Filters Bar */}
        <div className="filters-container">
          <input
            type="text"
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />

          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="">All Status</option>
            <option value="PENDING">Pending</option>
            <option value="ACCEPTED">Accepted</option>
            <option value="COMPLETED">Completed</option>
            <option value="CANCELLED">Cancelled</option>
          </select>

          <select value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value="">Sort By</option>
            <option value="patient">Patient</option>
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
        </div>

        {/* Table */}
        <div className="appointments-table-container">
          <table className="appointments-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Patient</th>
                <th>Date</th>
                <th>Time</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {paginatedData.length > 0 ? (
                paginatedData.map((a, index) => (
                  <tr key={a.id}>
                    <td>{start + index + 1}</td>
                    <td>{a.patient}</td>
                    <td>{a.date}</td>
                    <td>{a.time}</td>
                    <td>{a.reason}</td>
                    <td>
                      <span className={`status-badge status-${a.status.toLowerCase()}`}>
                        {a.status}
                      </span>
                    </td>
                    <td>
                      {a.status === "PENDING" && (
                        <>
                          <button
                            className="action-btn accept-btn"
                            onClick={() => updateStatus(a.id, "ACCEPTED")}
                          >
                            Accept
                          </button>

                          <button
                            className="action-btn reject-btn"
                            onClick={() => updateStatus(a.id, "CANCELLED")}
                          >
                            Reject
                          </button>
                        </>
                      )}

                      {a.status === "ACCEPTED" && (
                        <button
                          className="action-btn complete-btn"
                          onClick={() => updateStatus(a.id, "COMPLETED")}
                        >
                          Complete
                        </button>
                      )}

                      {(a.status === "COMPLETED" || a.status === "CANCELLED") && "—"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", padding: "20px" }}>
                    No appointments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            Prev
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            Next
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DoctorAppointments;
