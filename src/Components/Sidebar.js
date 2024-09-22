import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ isAdminLoggedIn }) => {
  return (
    <div className="topbar">
      <h2>Organ Donation System</h2>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patient">Patient</Link></li>
        <li><Link to="/donor">Donor</Link></li>
        {isAdminLoggedIn && (
          <>
            <li><Link to="/admin/patient-list">Patient List</Link></li>
            <li><Link to="/admin/donor-list">Donor List</Link></li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Topbar;
