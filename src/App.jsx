import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Doctors from "./Components/Doctors";
import ForgetPassword from "./Components/ForgetPassword"; // Import this
import Home from "./Components/Home";
import LoginPage from "./Components/LoginPage";
import PatientSignup from "./Components/PatientSignup";
import Services from "./Components/Services";
import UserAppointment from "./Components/AppointmentPage";
import UserDashboard from "./Components/UserDashboard";
import ProfileManagement from "./Components/ProfileManagement";
import ManageAppointments from "./Components/ManageAppointments";
import MedicalRecords from "./Components/MedicalRecords";
import BillingPayments from "./Components/BillingPayments";
import DoctorDashboard from "./Components/DoctorDashboard";

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
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<UserAppointment />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<ProfileManagement />} />
        <Route path="/appointments" element={<ManageAppointments />} />
        <Route path="/records" element={<MedicalRecords />} />
        <Route path="/billing" element={<BillingPayments />} />
       
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />



        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;

