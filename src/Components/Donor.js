import React, { useState } from 'react';
import '../styles.css'; // Import your CSS

const Donor = ({ addDonor }) => {
  const [donor, setDonor] = useState({
    name: '',
    age: '',
    bloodType: '',
    organToDonate: '',
    place: '',
    address: '',
    email: '',
    contactNumber: '',
    gender: '',
    causeOfDeath: ''
  });

  const handleChange = (e) => {
    setDonor({ ...donor, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDonor(donor);
    setDonor({
      name: '',
      age: '',
      bloodType: '',
      organToDonate: '',
      place: '',
      address: '',
      email: '',
      contactNumber: '',
      gender: '',
      causeOfDeath: ''
    }); // Clear form
  };

  return (
    <div className="form-container">
      <h2>Donor Details</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={donor.name} onChange={handleChange} required />
        
        <label>Age:</label>
        <input type="number" name="age" value={donor.age} onChange={handleChange} required />
        
        <label>Blood Type:</label>
        <input type="text" name="bloodType" value={donor.bloodType} onChange={handleChange} required />
        
        <label>Organ to Donate:</label>
        <input type="text" name="organToDonate" value={donor.organToDonate} onChange={handleChange} required />

        <label>Place:</label>
        <input type="text" name="place" value={donor.place} onChange={handleChange} required />

        <label>Address:</label>
        <input type="text" name="address" value={donor.address} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={donor.email} onChange={handleChange} required />

        <label>Contact Number:</label>
        <input type="text" name="contactNumber" value={donor.contactNumber} onChange={handleChange} required />

        <label>Gender:</label>
        <select name="gender" value={donor.gender} onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label>Cause of Death:</label>
        <input type="text" name="causeOfDeath" value={donor.causeOfDeath} onChange={handleChange} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Donor;
