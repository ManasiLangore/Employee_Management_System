import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";
import axios from "axios";

export default function Salary() {
  const [salary, setSalary] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (user) {
      // Example API call: replace with your backend endpoint
      axios.get(`http://localhost:8080/employee/${user.empid}/salary`)
        .then(res => setSalary(res.data))
        .catch(err => console.error(err));
    }
  }, [user]);

  return (
    <div>
      <EmpNavbar></EmpNavbar>
      <div className="container mt-5">
        <h2 className="mb-4">Salary / Pay Slips</h2>
        <table className="table table-bordered shadow">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {salary.length > 0 ? (
              salary.map((s, index) => (
                <tr key={index}>
                  <td>{s.month}</td>
                  <td>{s.amount}</td>
                  <td>
                    <a href={s.payslipUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">
                      Download
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr><td colSpan="3">No salary records found</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}