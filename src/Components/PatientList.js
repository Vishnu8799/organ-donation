import React, { useState } from 'react';

const PatientList = ({ patients }) => {
  const [searchName, setSearchName] = useState('');
  const [searchCondition, setSearchCondition] = useState('');
  const [searchOrgan, setSearchOrgan] = useState('');

  // Filter patients based on search criteria
  const filteredPatients = patients.filter(patient => {
    return (
      patient.name.toLowerCase().includes(searchName.toLowerCase()) &&
      patient.medicalCondition.toLowerCase().includes(searchCondition.toLowerCase()) &&
      patient.organ.toLowerCase().includes(searchOrgan.toLowerCase())
    );
  });

  return (
    <div className="patient-list">
      <h2>Patient List</h2>

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
          placeholder="Search by Medical Condition"
          value={searchCondition}
          onChange={e => setSearchCondition(e.target.value)}
        />
        <input
          type="text"
          placeholder="Search by Organ"
          value={searchOrgan}
          onChange={e => setSearchOrgan(e.target.value)}
        />
      </div>

      {/* Patient Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Medical Condition</th>
            <th>Treatment</th>
            <th>Organ</th>
            <th>Time Required</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.address}</td>
                <td>{patient.contactNumber}</td>
                <td>{patient.email}</td>
                <td>{patient.medicalCondition}</td>
                <td>{patient.treatment}</td>
                <td>{patient.organ}</td>
                <td>{patient.timeRequired}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10">No patients found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PatientList;
