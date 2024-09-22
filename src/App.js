import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import Patient from './Components/Patient';
import Donor from './Components/Donor';
import AdminLogin from './Components/AdminLogin';
import PatientList from './Components/PatientList';
import DonorList from './Components/DonorList';

function App() {
  const [patients, setPatients] = useState([]);
  const [donors, setDonors] = useState([]);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  // Add new patient data
  const addPatient = (newPatient) => {
    setPatients([...patients, newPatient]);
  };

  // Add new donor data
  const addDonor = (newDonor) => {
    // Ensure donor age is a number
    const formattedDonor = {
      ...newDonor,
      age: parseInt(newDonor.age, 10), // Convert age to a number
    };
    setDonors([...donors, formattedDonor]);
  };
  

  // Handle admin login
  const handleAdminLogin = (username, password) => {
    if (username === 'admin' && password === 'password') {
      setIsAdminLoggedIn(true); 
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  };

  // Handle admin logout
  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    alert('You have logged out successfully!');
  };

  return (
    <Router>
      <div className="app">
        <div className="topbar">
          <h2>Organ Donation System</h2>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/patient">Patient</Link></li>
            <li><Link to="/donor">Donor</Link></li>
            {!isAdminLoggedIn && <li><Link to="/admin">Admin</Link></li>}
          </ul>
        </div>

        <div className="content">
          {isAdminLoggedIn && (
            <div className="admin-sidebar">
              <ul>
                <li><Link to="/admin/patient-list">Patient List</Link></li>
                <li><Link to="/admin/donor-list">Donor List</Link></li>
                <li><Link className="logout-button" onClick={handleAdminLogout}>Logout </Link></li>
              </ul>
            </div>
          )}

          <div className="main-content">  
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/patient" element={<Patient addPatient={addPatient} />} />
              <Route path="/donor" element={<Donor addDonor={addDonor} />} />
              <Route path="/admin" element={
                isAdminLoggedIn 
                ? <Navigate to="/admin/patient-list" /> 
                : <AdminLogin handleLogin={handleAdminLogin} />
              } />
              <Route path="/admin/patient-list" element={isAdminLoggedIn ? <PatientList patients={patients} /> : <Navigate to="/admin" />} />
              <Route path="/admin/donor-list" element={isAdminLoggedIn ? <DonorList donors={donors} /> : <Navigate to="/admin" />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
