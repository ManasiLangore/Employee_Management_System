
import React from 'react'
import HomeNavbar from './HomeNavbar'

export default function Services() {
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

          <h1 className="fw-bold">
            Our Services
          </h1>

          <p className="lead mb-0">
            Explore the features of our Employee Management System
          </p>

        </div>
      </div>


      {/* SERVICES SECTION */}
      <div className="container py-5">

        <div className="row g-4">

          {/* Card 1 */}
          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center p-4">

              <h4 className="fw-bold text-primary">
                Employee Management
              </h4>

              <p className="text-secondary mt-3 mb-0">
                Add, update, view, and delete employee records easily.
              </p>

            </div>

          </div>


          {/* Card 2 */}
          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center p-4">

              <h4 className="fw-bold text-primary">
                Attendance Tracking
              </h4>

              <p className="text-secondary mt-3 mb-0">
                Monitor employee attendance and working hours efficiently.
              </p>

            </div>

          </div>


          {/* Card 3 */}
          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center p-4">

              <h4 className="fw-bold text-primary">
                Payroll Management
              </h4>

              <p className="text-secondary mt-3 mb-0">
                Manage salaries, generate payslips, and track payments.
              </p>

            </div>

          </div>


          {/* Card 4 */}
          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center p-4">

              <h4 className="fw-bold text-primary">
                Search Employees
              </h4>

              <p className="text-secondary mt-3 mb-0">
                Quickly find employees using name or other details.
              </p>

            </div>

          </div>


          {/* Card 5 */}
          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center p-4">

              <h4 className="fw-bold text-primary">
                Profile Management
              </h4>

              <p className="text-secondary mt-3 mb-0">
                Upload and manage employee profile information.
              </p>

            </div>

          </div>


          {/* Card 6 */}
          <div className="col-md-4">

            <div className="card border-0 shadow-sm h-100 text-center p-4">

              <h4 className="fw-bold text-primary">
                Secure Data
              </h4>

              <p className="text-secondary mt-3 mb-0">
                Ensures safe and reliable storage of employee data.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* EXTRA CTA SECTION */}
      <div className="text-center py-5">

        <h3 className="fw-bold">
          Ready to manage your employees?
        </h3>

        <button className="btn btn-primary mt-3 px-4">
          Get Started
        </button>

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

