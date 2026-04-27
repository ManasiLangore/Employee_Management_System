import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
            // Adjust the URL to match your @PutMapping in the Controller
            await axios.put(`http://localhost:8080/api/leaves/${id}/status`, null, {
                params: { status, remarks }
            });
            fetchLeaves(); // Refresh the list after update
        } catch (error) {
            alert("Failed to update status");
        }
    };


  return (
    <div className="container mt-5">
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
        </div>
  )
}
