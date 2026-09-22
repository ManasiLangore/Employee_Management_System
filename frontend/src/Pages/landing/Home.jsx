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



      {/* CAROUSEL */}
      <div id="carouselExampleCaptions" className="carousel slide mt-4 container" data-bs-ride="carousel">
        
        <div className="carousel-inner rounded shadow">

          <div className="carousel-item active">
            <img 
              src="https://cdn.techjockey.com/blog/wp-content/uploads/2022/12/15122450/14-Best-Employee-Management-System-for-Small-Business-in-India-_feature.jpg"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="slide1"
            />
            <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">
              <h5>Manage Employees</h5>
              <p>All employee data in one place</p>
            </div>
          </div>

          <div className="carousel-item">
            <img 
              src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="slide2"
            />
            <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">
              <h5>Track Performance</h5>
              <p>Monitor progress easily</p>
            </div>
          </div>

          <div className="carousel-item">
            <img 
              src="https://leapmax.ai/wp-content/uploads/2024/10/employee-management-system.webp"
              className="d-block w-100"
              style={{ height: "400px", objectFit: "cover" }}
              alt="slide3"
            />
            <div className="carousel-caption bg-dark bg-opacity-50 rounded p-2">
              <h5>Secure System</h5>
              <p>Safe and reliable data</p>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>

      {/* FEATURES SECTION */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Features</h2>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h4>👨‍💼 Employee Records</h4>
              <p>Store and manage employee information easily.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h4>📊 Reports</h4>
              <p>Generate reports and track performance.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h4>🔐 Security</h4>
              <p>Secure authentication and data protection.</p>
            </div>
          </div>

        </div>
      </div>

      {/* ABOUT US PREVIEW */}
      <div className="container mt-5 text-center">
        <h2>About Us</h2>
        <p className="mt-3">
          We provide a smart and efficient Employee Management System to help organizations
          manage employee data, track performance, and improve productivity.
        </p>

        <Link to="/aboutus" className="btn btn-primary mt-2">
          Read More
        </Link>
      </div>

      {/* SERVICES PREVIEW */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Our Services</h2>

        <div className="row text-center">

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Employee Tracking</h5>
              <p>Monitor employee details and activities.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Attendance System</h5>
              <p>Track attendance efficiently.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Payroll</h5>
              <p>Manage salaries and payments.</p>
            </div>
          </div>

        </div>

        <div className="text-center mt-3">
          <Link to="/service" className="btn btn-success">
            Explore Services
          </Link>
        </div>
      </div>

      {/* CONTACT PREVIEW */}
      <div className="container mt-5 text-center">
        <h2>Contact Us</h2>
        <p className="mt-3">
          Have questions or need support? Get in touch with us anytime.
        </p>

        <Link to="/contactus" className="btn btn-danger mt-2">
          Contact Now
        </Link>
      </div>

      {/* FOOTER */}
      <div className="bg-primary text-white text-center p-3 mt-5">
        <p>© 2026 Employee Management System</p>
      </div>

    </div>
  )
}