import React from 'react'
import HomeNavbar from './HomeNavbar'

export default function Services() {
  return (
    <div>
      <HomeNavbar></HomeNavbar>

      {/* HEADER */}
      <div className="bg-primary text-white text-center p-5">
        <h1 className="fw-bold">Our Services</h1>
        <p className="lead">Explore the features of our Employee Management System</p>
      </div>

      {/* SERVICES SECTION */}
      <div className="container mt-5">
        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h4>👨‍💼 Employee Management</h4>
              <p>Add, update, view, and delete employee records easily.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h4>🕒 Attendance Tracking</h4>
              <p>Monitor employee attendance and working hours efficiently.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h4>💰 Payroll Management</h4>
              <p>Manage salaries, generate payslips, and track payments.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h4>🔍 Search Employees</h4>
              <p>Quickly find employees using name or other details.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h4>👤 Profile Management</h4>
              <p>Upload and manage employee profile information.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className="col-md-4">
            <div className="card shadow h-100 text-center p-3">
              <h4>🔐 Secure Data</h4>
              <p>Ensures safe and reliable storage of employee data.</p>
            </div>
          </div>

        </div>
      </div>

      {/* EXTRA CTA SECTION */}
      <div className="text-center mt-5 mb-5">
        <h3>Ready to manage your employees?</h3>
        <button className="btn btn-success mt-2">Get Started</button>
      </div>

    </div>
  )
}