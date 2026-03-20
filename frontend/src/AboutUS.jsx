import React from 'react'
import HomeNavbar from './HomeNavbar'

export default function AboutUS() {
  return (
    <div>

      <HomeNavbar></HomeNavbar>

      {/* HEADER */}
      <div className="bg-primary text-white text-center p-5">
        <h1 className="fw-bold">About Us</h1>
        <p className="lead">Know more about our Employee Management System</p>
      </div>

      {/* ABOUT CONTENT */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">

            <p className="fs-5">
              The Employee Management System (EMS) is a web-based application
              designed to simplify the management of employee data within an organization.
            </p>

            <p>
              This system helps in maintaining employee records, tracking attendance,
              and managing payroll efficiently. It reduces manual work and improves accuracy.
            </p>

            <p>
              This project is developed as part of academic learning to understand
              real-world software development using modern technologies like React and Spring Boot.
            </p>

          </div>
        </div>
      </div>

      {/* MISSION & VISION */}
      <div className="container mt-5">
        <div className="row g-4">

          {/* Mission */}
          <div className="col-md-6">
            <div className="card shadow h-100 p-4 text-center">
              <h3>🎯 Our Mission</h3>
              <p>
                To provide a simple and efficient system for managing employee data
                and improving organizational productivity.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="col-md-6">
            <div className="card shadow h-100 p-4 text-center">
              <h3>🚀 Our Vision</h3>
              <p>
                To build smart and scalable solutions that make business management easier
                using modern technology.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* EXTRA SECTION (optional but looks awesome) */}
      <div className="container mt-5 text-center">
        <h3>Why Choose Us?</h3>
        <div className="row mt-4">

          <div className="col-md-4">
            <h5>⚡ Fast</h5>
            <p>Quick and efficient employee management.</p>
          </div>

          <div className="col-md-4">
            <h5>🔐 Secure</h5>
            <p>Your data is safe with proper authentication.</p>
          </div>

          <div className="col-md-4">
            <h5>📱 Easy to Use</h5>
            <p>Simple and user-friendly interface.</p>
          </div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="bg-primary text-white text-center p-3 mt-5">
        <p>© 2026 Employee Management System</p>
      </div>

    </div>
  )
}