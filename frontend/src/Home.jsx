import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    
    <div style={{fontFamily:"Arial"}}>

      {/* Hero Section */}
      <div style={{
        background:"#0d6efd",
        color:"white",
        padding:"60px",
        textAlign:"center"
      }}>
        <h1>Employee Management System</h1>
        <p>Manage employees efficiently with smart tools</p>

        <Link to="/services">
          <button style={{
            padding:"10px 20px",
            marginTop:"20px",
            border:"none",
            background:"white",
            color:"#0d6efd",
            cursor:"pointer",
            fontWeight:"bold"
          }}>
            Explore Services
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div style={{padding:"40px", textAlign:"center"}}>
        <h2>Our Features</h2>

        <div style={{
          display:"flex",
          justifyContent:"space-around",
          marginTop:"30px"
        }}>

          <div style={{width:"30%", padding:"20px", boxShadow:"0 0 10px gray"}}>
            <h3>Employee Management</h3>
            <p>Add, update and delete employee records easily.</p>
          </div>

          <div style={{width:"30%", padding:"20px", boxShadow:"0 0 10px gray"}}>
            <h3>Attendance Tracking</h3>
            <p>Track daily attendance and performance.</p>
          </div>

          <div style={{width:"30%", padding:"20px", boxShadow:"0 0 10px gray"}}>
            <h3>Payroll System</h3>
            <p>Manage salary and employee payments efficiently.</p>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div style={{
        background:"#f8f9fa",
        padding:"40px",
        textAlign:"center"
      }}>
        <h2>Start Managing Your Employees Today</h2>
        <Link to="/contact">
          <button style={{
            padding:"10px 20px",
            border:"none",
            background:"#0d6efd",
            color:"white",
            cursor:"pointer"
          }}>
            Contact Us
          </button>
        </Link>
      </div>

    </div>
  )
}
