import React, { useState } from "react";
import DoctorHeader from "./DoctorHeader";
import Footer from "./Footer";
import "./DoctorEarnings.css";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

const DoctorEarnings = () => {
  const [bills, setBills] = useState([
    {
      id: 1,
      patient: "Manju Kumar",
      date: "2025-11-12",
      service: "General Consultation",
      amount: 800,
      status: "Paid",
    },
    {
      id: 2,
      patient: "Priya Sharma",
      date: "2025-11-10",
      service: "Skin Checkup",
      amount: 500,
      status: "Pending",
    },
    {
      id: 3,
      patient: "Rohit Singh",
      date: "2025-10-28",
      service: "Orthopedic Consultation",
      amount: 1000,
      status: "Paid",
    },
  ]);

  const [monthFilter, setMonthFilter] = useState("");

  // TOTAL earnings
  const totalEarnings = bills
    .filter((b) => b.status === "Paid")
    .reduce((s, b) => s + b.amount, 0);

  // Month wise earnings for chart
  const monthNames = {
    "2025-10": "October",
    "2025-11": "November",
  };

  const monthlyChartData = Object.keys(monthNames).map((month) => {
    const monthlyTotal = bills
      .filter((b) => b.status === "Paid" && b.date.startsWith(month))
      .reduce((s, b) => s + b.amount, 0);
    return { month: monthNames[month], earnings: monthlyTotal };
  });

  // Weekly Chart (last 7 days)
  const weeklyChartData = [
    { day: "Mon", earnings: 300 },
    { day: "Tue", earnings: 500 },
    { day: "Wed", earnings: 0 },
    { day: "Thu", earnings: 400 },
    { day: "Fri", earnings: 200 },
    { day: "Sat", earnings: 600 },
    { day: "Sun", earnings: 700 },
  ];

  return (
    <div className="doctor-earnings-page">
      <DoctorHeader />

      <main className="doctor-earnings-main">
        <h2 className="earnings-heading">Doctor Earnings & Billings</h2>
        <p className="earnings-subheading">
          Track your revenue and billing history efficiently.
        </p>

        {/* Summary Cards */}
        <div className="earnings-summary">
          <div className="summary-card">
            <h3>Total Earnings</h3>
            <p className="amount">₹{totalEarnings}</p>
          </div>

          <div className="summary-card">
            <h3>Total Appointments</h3>
            <p className="amount">{bills.length}</p>
          </div>
        </div>

        {/* ===== Charts Section ===== */}
        <h3 className="chart-title">Monthly Earnings</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="earnings" fill="#0a828d" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <h3 className="chart-title">Last 7 Days Earnings</h3>
        <div className="chart-container">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="earnings"
                stroke="#ef4444"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DoctorEarnings;
