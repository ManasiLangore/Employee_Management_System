import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";
import axios from "axios";

export default function Attendance() {
  const [attendance, setAttendance] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      // Example API call: replace with your backend endpoint
      axios.get(`http://localhost:8080/employee/${user.empid}/attendance`)
        .then(res => setAttendance(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <div>
      <EmpNavbar></EmpNavbar>
      <div className="container mt-5">
        <h2 className="mb-4">My Attendance</h2>
        <table className="table table-striped shadow">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {attendance.length > 0 ? (
              attendance.map((a, index) => (
                <tr key={index}>
                  <td>{a.date}</td>
                  <td>{a.status}</td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="2">No attendance records found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}