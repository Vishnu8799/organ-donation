import React, { useState } from "react";
import { Row } from "reactstrap";

const AdminLogin = ({ handleLogin }) => {
  // State for storing username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Static admin credentials
  const adminCredentials = {
    username: "admin", // Static username
    password: "password", // Static password
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the entered credentials
    if (
      username === adminCredentials.username &&
      password === adminCredentials.password
    ) {
      setErrorMessage(""); // Clear any error messages
      handleLogin(username, password); // Call parent function to log in
    } else {
      setErrorMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div style={{ height: "100vh" }}>
      <h2>Admin Login</h2>
      <div style={{display:'flex',flexDirection:'column',width:'20%'}}>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <Row
        style={{
          width: "15%",
          height: "10px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "10px",
          paddingLeft: "110px",
        }}
      >
        <div className="login_button" onClick={handleSubmit}>
          Login
        </div>
      </Row>
    </div>
  );
};

export default AdminLogin;
