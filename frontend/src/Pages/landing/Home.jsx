import React from 'react'
import { Link } from 'react-router-dom'

import HomeNavbar from './HomeNavbar'

export default function Home() {
  return (
    <div className='bg-light'>
      <HomeNavbar></HomeNavbar>

      {/* HERO SECTION */}
      {/* <div className="bg-primary text-white text-center p-5">
        <h1 className="display-4 fw-bold">Employee Management System</h1>
        <p className="lead">Smart way to manage your employees</p>
        <Link to="/login" className="btn btn-warning btn-lg mt-3">
          Get Started
        </Link>
      </div> */}
      <section 
        className="py-5" 
        style={{ 
          background: 
            "linear-gradient(135deg, #0d6efd 0%, #084298 100%)", 
            minHeight: "520px", 
            display: "flex", 
            alignItems: "center", 
        }} >

        <div className='container'>
          <div className='row align-itm-center'>

            {/* LEFT */}
            <div className='col-lg-6 text-white'>
              <span className='badge bg-warning text-dark px-3 py-2 mb-3'>
                Employee Management Platform
              </span>

              <h1 className='display-4 fw-bold mb-3'>
                Manage Your WorkForce
                <br/>
                <span className='text-warning'>
                  Smarter.
                </span>
              </h1>

              <p className='lead mb-4'>
                A simple and efficient platform to manage employees, attendance, leaves and payroll — all in one place.
              </p>

              <div className='d-flex gap-3 flex-wrap'>
                <Link to={"/login"} className='btn btn-warning btn-lg px-4 fw-swmibold'>
                  Get Started
                </Link>

                <Link to={"/service"} className='btn btn-outline-light btn-lg px-4'>
                  Exploer Features
                </Link>
              </div>

              <div className="mt-4 small"> 
                ✓ Employee Management &nbsp;&nbsp; 
                ✓ Attendance &nbsp;&nbsp; 
                ✓ Payroll 
              </div>
            </div>

            
            {/* RIGHT - MOVING IMAGE CAROUSEL */}
            <div className="col-lg-6 mt-5 mt-lg-0">

              <div
                id="emsCarousel"
                className="carousel slide carousel-fade shadow-lg rounded-4 overflow-hidden"
                data-bs-ride="carousel"
                data-bs-interval="3000"
              >

                {/* INDICATORS */}
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#emsCarousel"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#emsCarousel"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>

                  <button
                    type="button"
                    data-bs-target="#emsCarousel"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                </div>

                {/* IMAGES */}
                <div className="carousel-inner">

                  {/* IMAGE 1 */}
                  <div className="carousel-item active">
                    <img
                      src="https://cdn.techjockey.com/blog/wp-content/uploads/2022/12/15122450/14-Best-Employee-Management-System-for-Small-Business-in-India-_feature.jpg"
                      className="d-block w-100"
                      alt="Employee Management"
                      style={{
                        height: "400px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="text-center bg-white py-3">
                      <h4 className="fw-bold text-primary mb-1">
                        Manage Employees
                      </h4>

                      <p className="text-dark mb-0">
                        Keep all employee information organized in one place.
                      </p>
                    </div>
                  </div>

                  {/* IMAGE 2 */}
                  <div className="carousel-item">
                    <img
                      src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
                      className="d-block w-100"
                      alt="Employee Tracking"
                      style={{
                        height: "400px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="text-center bg-white py-3">
                      <h4 className="fw-bold text-primary mb-1">
                        Track Attendance
                      </h4>

                      <p className="text-dark mb-0">
                        Monitor attendance and employee activities easily.
                      </p>
                    </div>
                  </div>

                  {/* IMAGE 3 */}
                  <div className="carousel-item">
                    <img
                      src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
                      className="d-block w-100"
                      alt="Employee Management Dashboard"
                      style={{
                        height: "400px",
                        objectFit: "cover"
                      }}
                    />

                    <div className="text-center bg-white py-3">
                      <h4 className="fw-bold text-primary mb-1">
                        Simplify HR Operations
                      </h4>

                      <p className="text-dark mb-0">
                        Manage attendance, leaves and payroll from one platform.
                      </p>
                    </div>
                  </div>

                </div>

                {/* PREVIOUS BUTTON */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#emsCarousel"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon"></span>
                  <span className="visually-hidden">Previous</span>
                </button>

                {/* NEXT BUTTON */}
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#emsCarousel"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon"></span>
                  <span className="visually-hidden">Next</span>
                </button>

              </div>

            </div>


          </div>
        </div>
      </section>



      {/* ===== FEATURES ===== */}
      
      <section className='py-5'>
        <div className='container'>

          <div className='text-center mb-5'>
            <span className='fw-bold' style={{ color: "#7c3aed" }}>
              POWERFUL FEATURES
            </span>

            <h2 className='fw-bold mt-2'>
              Everything You Need in One Place
            </h2>

            <p className="text-muted"> 
              Simplify everyday employee management with one centralized platform. 
            </p>
          </div>

          <div className='row g-4'>

            {/* FEATURE 1 */}
            <div className='col-md-6 col-lg-3'>
              <div className="card border-0 h-100 p-4 text-center shadow-sm" style={{ borderRadius: "20px", borderTop: "5px solid #6366f1", }}>
                <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px", background: "#e0e7ff", fontSize: "30px", }}>
                  👨‍💼
                </div>
                <h5 className="fw-bold"> 
                  Employee Management 
                </h5> 
                <p className="text-muted small"> 
                  Manage employee profiles, departments and important information. 
                </p>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="col-md-6 col-lg-3"> 
              <div className="card border-0 h-100 p-4 text-center shadow-sm" style={{ borderRadius: "20px", borderTop: "5px solid #10b981", }} > 
                <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px", background: "#d1fae5", fontSize: "30px", }} > 
                  📅 
                </div> 
                <h5 className="fw-bold"> 
                  Attendance 
                </h5> 
                <p className="text-muted small"> 
                  Track daily attendance and employee presence efficiently. 
                </p> 
              </div> 
            </div>

            {/* FEATURE 3 */} 
            <div className="col-md-6 col-lg-3"> 
              <div className="card border-0 h-100 p-4 text-center shadow-sm" style={{ borderRadius: "20px", borderTop: "5px solid #f59e0b", }} > 
                <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px", background: "#fef3c7", fontSize: "30px", }} > 
                  📝 
                </div> 
                <h5 className="fw-bold"> 
                  Leave Management 
                </h5> 
                <p className="text-muted small"> 
                  Apply, review and approve employee leave requests. 
                </p> 
              </div> 
            </div> 
            
            {/* FEATURE 4 */} 
            <div className="col-md-6 col-lg-3"> 
              <div className="card border-0 h-100 p-4 text-center shadow-sm" style={{ borderRadius: "20px", borderTop: "5px solid #ec4899", }} > 
                <div className="mx-auto mb-3 rounded-circle d-flex align-items-center justify-content-center" style={{ width: "70px", height: "70px", background: "#fce7f3", fontSize: "30px", }} > 
                  💰 
                </div>
                <h5 className="fw-bold"> 
                  Payroll 
                </h5> 
                <p className="text-muted small"> 
                  Manage salaries, payroll information and pay slips. 
                </p> 
              </div> 
            </div>

          </div>

        </div>
      </section>

      {/* ================= COLORFUL PROCESS ================= */}
      <section 
        className="py-5" style={{ background: "linear-gradient(180deg,#f5f3ff,#eef2ff)", }} > 
        <div className="container"> 
          <div className="text-center mb-5"> 
            <span className="fw-bold text-primary"> 
              HOW EMS WORKS 
            </span> 
            <h2 className="fw-bold mt-2"> 
              From Login to Insights 
            </h2> 
          </div> 

          <div className="row g-4 text-center"> 
            <div className="col-md-3"> 
              <div className="rounded-4 p-4 h-100" style={{ background: "#ffffff" }} > 
                <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: "65px", height: "65px", background: "linear-gradient(135deg,#6366f1,#8b5cf6)", fontSize: "22px", }} >
                  01 
                </div> 
                <h5 className="fw-bold mt-3"> 
                  Login 
                </h5> 
                <p className="text-muted small"> 
                  Access your personalized EMS account. 
                </p>
              </div> 
            </div> 
            
            <div className="col-md-3"> 
              <div className="rounded-4 p-4 h-100" style={{ background: "#ffffff" }} > 
                <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: "65px", height: "65px", background: "linear-gradient(135deg,#06b6d4,#0ea5e9)", fontSize: "22px", }} > 
                  02 
                </div> 
                <h5 className="fw-bold mt-3"> 
                  Manage 
                </h5> 
                <p className="text-muted small"> 
                  Manage employee information and operations. 
                </p> 
              </div> 
            </div> 
            
            <div className="col-md-3"> 
              <div className="rounded-4 p-4 h-100" style={{ background: "#ffffff" }} > 
                <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: "65px", height: "65px", background: "linear-gradient(135deg,#10b981,#14b8a6)", fontSize: "22px", }} > 
                  03 
                </div> 
                <h5 className="fw-bold mt-3"> 
                  Track 
                </h5> 
                <p className="text-muted small"> 
                  Track attendance, leaves and payroll. 
                </p> 
              </div> 
            </div> 
            
            <div className="col-md-3"> 
              <div className="rounded-4 p-4 h-100" style={{ background: "#ffffff" }} > 
                <div className="mx-auto rounded-circle d-flex align-items-center justify-content-center fw-bold text-white" style={{ width: "65px", height: "65px", background: "linear-gradient(135deg,#f59e0b,#f97316)", fontSize: "22px", }} > 
                  04 
                </div> 
                <h5 className="fw-bold mt-3"> 
                  Analyze 
                </h5> 
                <p className="text-muted small"> 
                  Get useful insights from your employee data. 
                </p> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section>


      {/* ================= CTA ================= */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #0d6efd, #084298)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold">
            Ready to Manage Your Workforce?
          </h2>

          <p className="lead">
            Experience a smarter way to manage employee operations.
          </p>

          <Link
            to="/login"
            className="btn btn-warning btn-lg px-5 fw-bold"
          >
            Get Started →
          </Link>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer
        className="text-white py-4"
        style={{
          background: "#0b1f3a",
        }}
      >
        <div className="container">
          <div className="row align-items-center">

            <div className="col-md-6">
              <h5 className="fw-bold mb-1">
                EMS
              </h5>

              <p className="text-white-50 mb-0">
                Employee Management System
              </p>
            </div>

            <div className="col-md-6 text-md-end mt-3 mt-md-0">

              <Link
                to="/aboutus"
                className="text-white-50 text-decoration-none me-3"
              >
                About
              </Link>

              <Link
                to="/service"
                className="text-white-50 text-decoration-none me-3"
              >
                Services
              </Link>

              <Link
                to="/contactus"
                className="text-white-50 text-decoration-none"
              >
                Contact
              </Link>

              <p className="text-white-50 small mt-3 mb-0">
                © 2026 Employee Management System
              </p>

            </div>

          </div>
        </div>
      </footer>


    </div>
  )
}