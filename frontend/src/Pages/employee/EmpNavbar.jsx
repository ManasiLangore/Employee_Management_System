import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EmpNavbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user")
    navigate("/login")
  };

  return (
    <div className="bg-dark text-white p-3 vh-100" style={{ width: "250px" }}>
      
      <h4 className="mb-4">EVM</h4>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link to="/employeedashboard" className='nav-link text-white'>Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/showemp" className='nav-link text-white'>Show Employee</Link>
        </li>

        <li className="nav-item">
          <Link to="/employee/profile" className='nav-link text-white'>My Profile</Link>
        </li>

        <li className="nav-item">
          <Link to="/employee/attendance" className='nav-link text-white'>Attendance</Link>
        </li>

        <li className="nav-item">
          <Link to="/employee/leave" className='nav-link text-white'>Leave</Link>
        </li>

        <li className="nav-item">
          <Link to="/employee/salary" className='nav-link text-white'>Salary</Link>
        </li>

        <li className="nav-item">
          <Link to="/employee/report" className='nav-link text-white'>Report</Link>
        </li>

        <li className="nav-item mt-3">
          <button className="btn btn-warning w-100" onClick={handleLogout}>
            Logout
          </button>
        </li>

      </ul>
    </div>
  )
}