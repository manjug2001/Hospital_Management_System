import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./BillingPayments.css";

const BillingPayments = () => {
  const [bills] = useState([
    {
      id: 1,
      service: "Consultation - Dr. Ramesh Kumar",
      amount: "₹800",
      date: "2025-11-02",
      status: "Paid",
    },
    {
      id: 2,
      service: "Lab Test - Blood Report",
      amount: "₹500",
      date: "2025-10-05",
      status: "Pending",
    },
    {
      id: 3,
      service: "X-Ray Scan - Chest",
      amount: "₹700",
      date: "2025-10-25",
      status: "Paid",
    },
    {
      id: 4,
      service: "Pharmacy Bill - Medicines",
      amount: "₹350",
      date: "2025-11-01",
      status: "Pending",
    },
  ]);

  return (
    <div className="billing-page">
      <Header />
      <main className="billing-main">
        <h2 className="billing-heading">Billing & Payments</h2>
        <p className="billing-subheading">
          Review your consultation and test payments securely below.
        </p>

        {/* Billing Grid */}
        <div className="billing-grid">
          {bills.map((bill) => (
            <div key={bill.id} className="bill-card">
              <div className="bill-content">
                <h3>{bill.service}</h3>
                <p>
                  <b>Date:</b> {bill.date}
                </p>
                <p>
                  <b>Amount:</b> {bill.amount}
                </p>

                <span className={`status ${bill.status.toLowerCase()}`}>
                  {bill.status}
                </span>

                <div className="billing-actions">
                  {bill.status === "Pending" ? (
                    <button className="pay-btn">Pay Now</button>
                  ) : (
                    <button className="download-btn">Download Receipt</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BillingPayments;
