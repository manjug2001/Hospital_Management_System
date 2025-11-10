import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PatientSignup from "./Components/PatientSignup";
import LoginPage from "./Components/LoginPage";
import ForgetPassword from "./Components/ForgetPassword"; // Import this
import Home from "./Components/Home";
import Doctors from "./Components/Doctors";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<PatientSignup />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />


        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

