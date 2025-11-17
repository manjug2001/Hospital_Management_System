import React, { useState, useEffect } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./AdminStaffManagement.css";

const AdminStaffManagement = () => {
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editStaff, setEditStaff] = useState(null);

  const [staff, setStaff] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("staffList")) || [];
    setStaff(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("staffList", JSON.stringify(staff));
  }, [staff]);

  const filteredStaff = staff.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const openAddModal = () => {
    setEditStaff(null);
    setModalOpen(true);
  };

  const openEditModal = (st) => {
    setEditStaff(st);
    setModalOpen(true);
  };

  const deleteStaff = (id) => {
    if (window.confirm("Are you sure you want to delete this staff member?")) {
      setStaff(staff.filter((s) => s.id !== id));
    }
  };

  const handleSaveStaff = (e) => {
    e.preventDefault();
    const form = e.target;

    const newStaff = {
      id: editStaff ? editStaff.id : Date.now(),
      name: form.name.value,
      role: form.role.value,
      shift: form.shift.value,
      contact: form.contact.value,
      status: form.status.value,
    };

    if (editStaff) {
      setStaff(staff.map((s) => (s.id === editStaff.id ? newStaff : s)));
    } else {
      setStaff([...staff, newStaff]);
    }

    setModalOpen(false);
  };

  return (
    <div className="admin-staff-page">
      <DoctorHeader />

      <main className="admin-staff-main">
        <h2 className="admin-staff-heading">Staff Management</h2>
        <p className="admin-staff-subheading">
          Manage hospital staff roles, schedules, and permissions.
        </p>

        {/* Top Bar */}
        <div className="staff-top-bar">
          <input
            placeholder="Search Staff..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="add-btn" onClick={openAddModal}>
            + Add Staff
          </button>
        </div>

        {/* Table */}
        <div className="staff-table-wrapper">
          <table className="staff-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Role</th>
                <th>Shift</th>
                <th>Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredStaff.map((s, index) => (
                <tr key={s.id}>
                  <td>{index + 1}</td>
                  <td>{s.name}</td>
                  <td>{s.role}</td>
                  <td>{s.shift}</td>
                  <td>{s.contact}</td>
                  <td>
                    <span
                      className={
                        s.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {s.status}
                    </span>
                  </td>

                  <td className="actions-col">
                    <button className="edit-btn" onClick={() => openEditModal(s)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteStaff(s.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredStaff.length === 0 && (
                <tr>
                  <td colSpan="7" className="no-results">
                    No staff found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>

      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>{editStaff ? "Edit Staff" : "Add Staff"}</h3>

            <form onSubmit={handleSaveStaff}>
              <input
                name="name"
                placeholder="Name"
                defaultValue={editStaff?.name}
                required
              />

              <select name="role" defaultValue={editStaff?.role || "Nurse"}>
                <option>Nurse</option>
                <option>Lab Technician</option>
                <option>Receptionist</option>
                <option>Pharmacist</option>
                <option>Cleaning Staff</option>
                <option>Security Staff</option>
              </select>

              <select name="shift" defaultValue={editStaff?.shift || "Morning"}>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
              </select>

              <input
                name="contact"
                placeholder="Contact Number"
                defaultValue={editStaff?.contact}
                required
              />

              <select
                name="status"
                defaultValue={editStaff?.status || "Active"}
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <div className="modal-actions">
                <button className="save-btn" type="submit">
                  Save
                </button>
                <button
                  className="cancel-btn"
                  type="button"
                  onClick={() => setModalOpen(false)}
                >
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

export default AdminStaffManagement;
