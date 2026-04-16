import React from 'react'
import EmpNavbar from './EmpNavbar'
import { useNavigate } from 'react-router-dom'

export default function EmployeeDashboard() {

  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      position: "relative"
    }}>

      {/* Dark overlay for readability */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.6)"
      }}></div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        
        {/* ✅ Your Navbar */}
        <EmpNavbar />

        {/* Heading */}
        <div className='container mt-5'>
          <h1 className='text-center text-white fw-bold mb-5'>
            👋 Welcome to Employee Dashboard
          </h1>

          <div className="row justify-content-center g-4">

            {/* Profile */}
            <div className="col-md-3">
              <div
                className="card text-center border-0"
                style={{
                  borderRadius: "15px",
                  cursor: "pointer",
                  transition: "0.3s",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.15)",
                  color: "white"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                onClick={() => navigate("/employee/profile")}
              >
                <div className="card-body">
                  <i className="bi bi-person-circle fs-1 text-info"></i>
                  <h5 className='mt-3 fw-bold'>My Profile</h5>
                  <p>View & edit your personal info</p>
                </div>
              </div>
            </div>

            {/* Attendance */}
            <div className="col-md-3">
              <div
                className="card text-center border-0"
                style={{
                  borderRadius: "15px",
                  cursor: "pointer",
                  transition: "0.3s",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.15)",
                  color: "white"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                onClick={() => navigate("/employee/attendance")}
              >
                <div className="card-body">
                  <i className="bi bi-calendar-check fs-1 text-success"></i>
                  <h5 className='mt-3 fw-bold'>Attendance</h5>
                  <p>Check your attendance records</p>
                </div>
              </div>
            </div>

            {/* Salary */}
            <div className="col-md-3">
              <div
                className="card text-center border-0"
                style={{
                  borderRadius: "15px",
                  cursor: "pointer",
                  transition: "0.3s",
                  backdropFilter: "blur(10px)",
                  background: "rgba(255,255,255,0.15)",
                  color: "white"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                onClick={() => navigate("/employee/salary")}
              >
                <div className="card-body">
                  <i className="bi bi-cash-stack fs-1 text-warning"></i>
                  <h5 className='mt-3 fw-bold'>My Salary</h5>
                  <p>View & download payslips</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bootstrap Icons */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
      />
    </div>
  )
}