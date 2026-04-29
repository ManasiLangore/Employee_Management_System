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
    <div className="container-fluid"> {/* Changed to fluid to prevent horizontal scroll */}
    
            <AdminNav></AdminNav>
            
            <div className='header' style={{marginLeft:'260px'}}>
                <header className="content-header">
                    <div className="search-container">
                        <input type="text" placeholder="Search anything..." />
                    </div>
                    <div className="admin-profile">
                        <strong>Admin Name</strong>
                    </div>
                </header>
            </div>

            {/* Fixed the tags here: removed the extra </div> and kept the content INSIDE <main> */}
            <main className="main-content" style={{ marginLeft: '260px', padding: '20px' }}>
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
  )
}