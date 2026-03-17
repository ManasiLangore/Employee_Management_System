import React from 'react'

export default function AboutUS() {
  return (
    <div>
        <h1>This is about us page</h1>
        <div style={{fontFamily:"Arial", padding:"40px"}}>

      {/* Heading Section */}
      <div style={{textAlign:"center", marginBottom:"40px"}}>
        <h1>About Us</h1>
        <p>Know more about our Employee Management System</p>
      </div>

      {/* About Content */}
      <div style={{maxWidth:"800px", margin:"auto", lineHeight:"1.8"}}>

        <p>
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

      {/* Mission & Vision */}
      <div style={{
        display:"flex",
        justifyContent:"space-around",
        marginTop:"50px"
      }}>

        <div style={{
          width:"40%",
          padding:"20px",
          boxShadow:"0 0 10px gray"
        }}>
          <h2>Our Mission</h2>
          <p>
            To provide a simple and efficient system for managing employee data
            and improving organizational productivity.
          </p>
        </div>

        <div style={{
          width:"40%",
          padding:"20px",
          boxShadow:"0 0 10px gray"
        }}>
          <h2>Our Vision</h2>
          <p>
            To build smart and scalable solutions that make business management easier
            using modern technology.
          </p>
        </div>

      </div>

    </div>
    </div>
  )
}
