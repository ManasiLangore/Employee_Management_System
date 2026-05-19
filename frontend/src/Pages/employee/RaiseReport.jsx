import React from 'react'
import EmpNavbar from "./EmpNavbar";

export default function RaiseReport() {
  return (
    <div className='d-flex bg-light' style={{ minHeight: '100vh' }}>
        <EmpNavbar></EmpNavbar>

        <div className="container-fluid p-5">
            <h2 className='fw-bold mb-4' style={{color:'#1a3a5f'}}>Grievance & Issue Reporting</h2>
        </div>

    </div>
  )
}
