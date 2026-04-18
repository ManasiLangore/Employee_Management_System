import React from 'react'
import EmpNavbar from './EmpNavbar'
import { useNavigate } from 'react-router-dom'

export default function EmployeeDashboard() {

  const navigate = useNavigate();

  return (
    <div className="d-flex">

      {/* LEFT SIDE → Sidebar */}
      <EmpNavbar />

      {/* RIGHT SIDE → Content */}
      <div style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative"
      }}>

        {/* Dark overlay */}
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

          <div className='container mt-5'>
            <h1 className='text-center text-white fw-bold mb-5'>
              👋 Welcome to Employee Dashboard
            </h1>

            <div className="row justify-content-center g-4">

              {/* Profile */}
              <div className="col-md-3">
                <div className="card text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/employee/profile")}
                >
                  <div className="card-body">
                    <h5>My Profile</h5>
                  </div>
                </div>
              </div>

              {/* Attendance */}
              <div className="col-md-3">
                <div className="card text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/employee/attendance")}
                >
                  <div className="card-body">
                    <h5>Attendance</h5>
                  </div>
                </div>
              </div>

              {/* Salary */}
              <div className="col-md-3">
                <div className="card text-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/employee/salary")}
                >
                  <div className="card-body">
                    <h5>Salary</h5>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}