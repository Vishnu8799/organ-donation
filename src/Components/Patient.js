import React, { useState } from 'react';
import '../styles.css'; // Import your CSS

const Patient = ({ addPatient }) => {
  const [patient, setPatient] = useState({
    name: '',
    age: '',
    gender: '',
    address: '',
    contactNumber: '',
    email: '',
    medicalCondition: '',
    treatment: '',
    organ: '',
    timeRequired: ''
  });

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPatient(patient);
    setPatient({
      name: '',
      age: '',
      gender: '',
      address: '',
      contactNumber: '',
      email: '',
      medicalCondition: '',
      treatment: '',
      organ: '',
      timeRequired: ''
    }); // Clear form
  };

  return (
    <div className="form-container">
      <h2>Patient Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={patient.name} onChange={handleChange} required />

        <label>Age:</label>
        <input type="number" name="age" value={patient.age} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="gender" value={patient.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Address:</label>
        <input type="text" name="address" value={patient.address} onChange={handleChange} required />

        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={patient.contactNumber} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={patient.email} onChange={handleChange} required />

        <label>Medical Condition:</label>
        <input type="text" name="medicalCondition" value={patient.medicalCondition} onChange={handleChange} required />

        <label>Treatment:</label>
        <input type="text" name="treatment" value={patient.treatment} onChange={handleChange} required />

        <label>Organ:</label>
        <input type="text" name="organ" value={patient.organ} onChange={handleChange} required />

        <label>Date Required:</label>
        <input type="date" name="timeRequired" value={patient.timeRequired} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Patient;
