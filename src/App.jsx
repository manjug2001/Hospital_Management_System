import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Doctors from "./Components/Doctors";
import ForgetPassword from "./Components/ForgetPassword";
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

// Doctor Pages
import DoctorDashboard from "./Components/DoctorDashboard";
import DoctorProfile from "./Components/DoctorProfile";
import DoctorManageAppointments from "./Components/DoctorManageAppointments";
import DoctorPatients from "./Components/DoctorPatients";
import DoctorPatientDetails from "./Components/DoctorPatientDetails";
import DoctorPrescriptions from "./Components/DoctorPrescriptions";
import DoctorReports from "./Components/DoctorReports";
import DoctorEarnings from "./Components/DoctorEarnings";
import DoctorManagement from "./Components/DoctorManagement";
import AdminPatients from "./Components/AdminPatients";
import AdminStaffManagement from "./Components/StaffManagement";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<PatientSignup />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/forget-password" element={<ForgetPassword />} />

        {/* Patient Pages */}
        <Route path="/appointment" element={<UserAppointment />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/profile" element={<ProfileManagement />} />
        <Route path="/appointments" element={<ManageAppointments />} />
        <Route path="/records" element={<MedicalRecords />} />
        <Route path="/billing" element={<BillingPayments />} />

        {/* Doctor Pages */}
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor-profile" element={<DoctorProfile />} />
        <Route path="/doctor-appointments" element={<DoctorManageAppointments />} />
        <Route path="/doctor-patients" element={<DoctorPatients />} />
        <Route path="/doctor-patient-details" element={<DoctorPatientDetails />} />
        <Route path="/doctor-prescriptions" element={<DoctorPrescriptions />} />
        <Route path="/doctor-reports" element={<DoctorReports />} />
        <Route path="/admin-doctors" element={<DoctorManagement />} />
        <Route path="/admin-patients" element={<AdminPatients />} />
        <Route path="/admin-staff" element={<AdminStaffManagement />} />




        {/* FIXED → Earnings/Billing Route */}
        <Route path="/doctor-billing" element={<DoctorEarnings />} />
      </Routes>
    </Router>
  );
}

export default App;
