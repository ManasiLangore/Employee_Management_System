import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <EmpNavbar></EmpNavbar>
      <div className="container mt-5">
        <h2 className="mb-4">My Profile</h2>
        <div className="card p-4 shadow" style={{ maxWidth: "500px" }}>
          <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Contact:</strong> {user.contactNo}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <p><strong>Employee ID:</strong> {user.empid}</p>
          <p><strong>Username:</strong> {user.username}</p>
        </div>
      </div>
    </div>
  );
}