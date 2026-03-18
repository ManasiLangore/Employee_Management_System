import React from 'react'

export default function Services() {
  return (
    <div>
        <h1>this is our services page</h1>
         <div style={{fontFamily:"Arial", padding:"40px"}}>

      {/* Heading */}
      <div style={{textAlign:"center", marginBottom:"40px"}}>
        <h1>Our Services</h1>
        <p>Explore the features of our Employee Management System</p>
      </div>

      {/* Services Cards */}
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"space-around",
        gap:"20px"
      }}>

        {/* Card 1 */}
        <div style={{
          width:"300px",
          padding:"20px",
          boxShadow:"0 0 10px gray",
          borderRadius:"10px"
        }}>
          <h3>Employee Management</h3>
          <p>
            Add, update, view, and delete employee records easily.
          </p>
        </div>

        {/* Card 2 */}
        <div style={{
          width:"300px",
          padding:"20px",
          boxShadow:"0 0 10px gray",
          borderRadius:"10px"
        }}>
          <h3>Attendance Tracking</h3>
          <p>
            Monitor employee attendance and working hours efficiently.
          </p>
        </div>

        {/* Card 3 */}
        <div style={{
          width:"300px",
          padding:"20px",
          boxShadow:"0 0 10px gray",
          borderRadius:"10px"
        }}>
          <h3>Payroll Management</h3>
          <p>
            Manage salaries, generate payslips, and track payments.
          </p>
        </div>

        {/* Card 4 */}
        <div style={{
          width:"300px",
          padding:"20px",
          boxShadow:"0 0 10px gray",
          borderRadius:"10px"
        }}>
          <h3>Search Employees</h3>
          <p>
            Quickly find employees using name or other details.
          </p>
        </div>

        {/* Card 5 */}
        <div style={{
          width:"300px",
          padding:"20px",
          boxShadow:"0 0 10px gray",
          borderRadius:"10px"
        }}>
          <h3>Profile Management</h3>
          <p>
            Upload and manage employee profile information.
          </p>
        </div>

        {/* Card 6 */}
        <div style={{
          width:"300px",
          padding:"20px",
          boxShadow:"0 0 10px gray",
          borderRadius:"10px"
        }}>
          <h3>Secure Data Handling</h3>
          <p>
            Ensures safe and reliable storage of employee data.
          </p>
        </div>

      </div>

    </div>
    </div>
  )
}
