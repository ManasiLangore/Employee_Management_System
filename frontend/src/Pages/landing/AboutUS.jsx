
import React from 'react'
import HomeNavbar from './HomeNavbar'

export default function AboutUS() {
  return (
    <div>

      <HomeNavbar />

      {/* HEADER */}
      <div
        className="text-white text-center py-5"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #084298)"
        }}
      >
        <div className="container">
          <h1 className="fw-bold">About Our System</h1>

          <p className="lead mb-0">
            A simple way to manage employee information and daily operations.
          </p>
        </div>
      </div>


      {/* ABOUT CONTENT */}
      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-9">

            <h2 className="fw-bold text-primary mb-4 text-center">
              Employee Management System
            </h2>

            <p className="fs-5 text-secondary">
              Managing employee information manually can take a lot of time.
              Our Employee Management System is designed to make these tasks
              easier and more organized.
            </p>

            <p className="text-secondary">
              The system provides a centralized platform for managing
              employee-related information within an organization. It helps
              reduce repetitive manual work and keeps important information
              organized in one place.
            </p>

            <p className="text-secondary">
              This project was developed as part of our academic learning
              to understand how a real-world web application works using
              technologies such as React, Spring Boot and MySQL.
            </p>

          </div>

        </div>

      </div>


      {/* MISSION & VISION */}
      <div className="bg-light py-5">

        <div className="container">

          <div className="text-center mb-4">

            <h2 className="fw-bold">
              Our Goal
            </h2>

            <p className="text-secondary">
              What we want this system to achieve
            </p>

          </div>


          <div className="row g-4">

            {/* Mission */}
            <div className="col-md-6">

              <div className="card border-0 shadow-sm h-100 p-4">

                <h3 className="fw-bold text-primary">
                  Our Mission
                </h3>

                <p className="text-secondary mt-3 mb-0">
                  To reduce repetitive manual work and provide a simple
                  system for managing employee information in an organized
                  and efficient way.
                </p>

              </div>

            </div>


            {/* Vision */}
            <div className="col-md-6">

              <div className="card border-0 shadow-sm h-100 p-4">

                <h3 className="fw-bold text-primary">
                  Our Vision
                </h3>

                <p className="text-secondary mt-3 mb-0">
                  To create an easy-to-use employee management platform
                  that can be improved and expanded as an organization grows.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* FOOTER */}
      <div
        className="text-white text-center py-4"
        style={{
          background: "#0b1f3a"
        }}
      >
        <p className="mb-0">
          © 2026 Employee Management System
        </p>
      </div>

    </div>
  )
}
