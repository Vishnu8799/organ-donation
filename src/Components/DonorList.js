import React, { useState } from 'react';

const DonorList = ({ donors }) => {
  const [searchName, setSearchName] = useState('');
  const [searchBloodType, setSearchBloodType] = useState('');
  const [searchOrgan, setSearchOrgan] = useState('');
  const [searchEmail, setSearchEmail] = useState('');

  // Filter donors based on search criteria
  const filteredDonors = donors.filter(donor => {
    return (
      donor.name.toLowerCase().includes(searchName.toLowerCase()) &&
      donor.bloodType.toLowerCase().includes(searchBloodType.toLowerCase()) &&
      donor.organToDonate.toLowerCase().includes(searchOrgan.toLowerCase()) &&
      donor.email.toLowerCase().includes(searchEmail.toLowerCase())
    );
  });

  return (
    <div className="donor-list">
      <h2>Donor List</h2>

      {/* Search Filters */}
      <div className="search-filters">
        <input
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={e => setSearchName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Blood Type"
          value={searchBloodType}
          onChange={e => setSearchBloodType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Organ"
          value={searchOrgan}
          onChange={e => setSearchOrgan(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Email"
          value={searchEmail}
          onChange={e => setSearchEmail(e.target.value)}
        />
      </div>

      {/* Donor Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Blood Type</th>
            <th>Organ to Donate</th>
            <th>Place</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact Number</th>
            <th>Gender</th>
            <th>Cause of Death</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.length > 0 ? (
            filteredDonors.map((donor, index) => (
              <tr key={index}>
                <td>{donor.name}</td>
                <td>{donor.age}</td>
                <td>{donor.bloodType}</td>
                <td>{donor.organToDonate}</td>
                <td>{donor.place}</td>
                <td>{donor.address}</td>
                <td>{donor.email}</td>
                <td>{donor.contactNumber}</td>
                <td>{donor.gender}</td>
                <td>{donor.causeOfDeath}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No donors found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default DonorList;
