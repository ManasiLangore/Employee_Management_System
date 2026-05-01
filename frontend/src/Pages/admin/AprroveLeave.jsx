import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

export default function AprroveLeave() {

    const [leaves, setLeaves] = useState([]);

    useEffect(() => {
        fetchLeaves();
    }, []);

    const fetchLeaves = async () => {
        const response = await axios.get('http://localhost:8080/api/leaves/all');
        setLeaves(response.data);
    };

    const updateStatus = async (id, status) => {
        const remarks = prompt("Enter remarks (Optional):");
        try {
            await axios.put(`http://localhost:8080/api/leaves/${id}/status`, null, {
                params: { status, remarks }
            });
            fetchLeaves(); 
        } catch (error) {
            alert("Failed to update status");
        }
    };


  return (
    <div className='d-flex bg-light' style={{ minHeight: '100vh' }}>
    
        {/* 1. Sidebar - Fixed width */}
        <div style={{ width: '260px', position: 'fixed', height: '100vh', zIndex: 100 }}>
            <AdminNav />
        </div>

        {/* 2. Main Content Area - Pushed to the right by sidebar width */}
      <div className="flex-grow-1" style={{ marginLeft: '260px' }}>
            
         {/* Top Header Section */}
        
        <header className="content-header">
          <div className="search-container">
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="admin-profile d-flex align-items-center">
            <div className="me-3 text-end">
              <div className="fw-bold mb-0">Admin Name</div>
              
            </div>
            <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
              A
            </div>
          </div>
        </header>
           

            {/* Fixed the tags here: removed the extra </div> and kept the content INSIDE <main> */}
            <main className="main-content" style={{ marginLeft: '0px', padding: '20px' }}>
                <h3>Pending Leave Requests</h3>
                <table className="table table-hover mt-3">
                    <thead className="table-dark">
                        <tr>
                            <th>Employee</th>
                            <th>Type</th>
                            <th>Dates</th>
                            <th>Reason</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {leaves.map((leave) => (
                            <tr key={leave.id}>
                                <td>
                                    <strong>{leave.employee?.firstname} {leave.employee?.lastname}</strong><br/>
                                    <small className="text-muted">{leave.employee?.department}</small>
                                </td>
                                <td>{leave.leaveType}</td>
                                <td>{leave.startDate} to {leave.endDate}</td>
                                <td>{leave.reason}</td>
                                <td>
                                    <span className={`badge ${leave.status === 'APPROVED' ? 'bg-success' : leave.status === 'REJECTED' ? 'bg-danger' : 'bg-warning text-dark'}`}>
                                        {leave.status}
                                    </span>
                                </td>
                                <td>
                                    {leave.status === 'PENDING' && (
                                        <div className="btn-group">
                                            <button className="btn btn-sm btn-outline-success" onClick={() => updateStatus(leave.id, 'APPROVED')}>Approve</button>
                                            <button className="btn btn-sm btn-outline-danger" onClick={() => updateStatus(leave.id, 'REJECTED')}>Reject</button>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
        </div>
  )
}