import React from 'react'
import EmpNavbar from './EmpNavbar'
import { Navigate, useNavigate } from 'react-router-dom'

export default function EmployeeDashboard() {

  const navigate = useNavigate();



  return (
    <div>
        <EmpNavbar></EmpNavbar>
        {/* <h1 className='heading'>Welcome to Employee Dsdhboard</h1>
        <div className='bgimg'></div> */}
        <div className='container mt-5'> 
            <h1 className='text-center mb-4'>Welcome to Employee Dashboard</h1>
        </div>
        <div className="row justify-content-center g-4">
          {/* My profile */}
          <div className="col-md-3">
            <div
              className="card text-center shadow p-3" 
              style={{cursor:"pointer"}}
              onClick={()=>navigate("/employee/profile")}
            >
              <div
                className="card-body">
                  <h5 className='card-title'>My profile</h5>
                   <p className="card-text">View and edit your personal info</p>
                </div>
            </div>
          </div>

          {/* View Attendance */}
          <div className="col-md-3">
            <div
              className="card text-center shadow p-3" 
              style={{cursor:"pointer"}}
              onClick={()=>navigate("/employee/attendance")}
            >
              <div
                className="card-body">
                  <h5 className='card-title'>View Attendance</h5>
                   <p className="card-text">check your attendece record here</p>
                </div>
            </div>
          </div>

          {/* salary/ pay slip */}
          <div className="col-md-3">
            <div
              className="card text-center shadow p-3" 
              style={{cursor:"pointer"}}
              onClick={()=>navigate("/employee/salary")}
            >
              <div
                className="card-body">
                  <h5 className='card-title'>My profile</h5>
                   <p className="card-text">View your salary and download payslips</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}
