import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpNavbar from './EmpNavbar';

export default function ApplyLeave() {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const currentId = user?.empid || user?.id;

    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        leaveType: 'SICK',
        reason: ''
    });

    const [leaveHistory, setLeaveHistory] = useState([]);

    // --- FETCH HISTORY ON LOAD ---
    const fetchHistory = async () => {
        if (currentId) {
            try {
                const res = await axios.get(`http://localhost:8080/api/leaves/employee/${currentId}`);
                setLeaveHistory(res.data);
            } catch (err) {
                console.error("Error fetching history:", err);
            }
        }
    };

    useEffect(() => {
        fetchHistory();
    }, [currentId]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            ...formData,
            status: 'PENDING',
            employee: { empid: parseInt(currentId) }
        };

        try {
            await axios.post('http://localhost:8080/api/leaves/apply', payload);
            alert("Leave applied successfully!");
            fetchHistory(); // Refresh history list immediately after applying
        } catch (error) {
            alert(error.response?.data?.message || "Server error");
        }
    };

    // Helper to get badge colors
    const getStatusBadge = (status) => {
        switch (status) {
            case 'APPROVED': return 'badge bg-success';
            case 'REJECTED': return 'badge bg-danger';
            default: return 'badge bg-warning text-dark';
        }
    };

    return (
        <div className='d-flex'>
            <EmpNavbar />
            <div className="container mt-4 mb-5">
                {/* --- TOP: FORM SECTION --- */}
                <div className="card shadow p-4 mb-5">
                    <h2 className="mb-4">Apply for Leave</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Start Date</label>
                                <input type="date" name="startDate" className="form-control" onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">End Date</label>
                                <input type="date" name="endDate" className="form-control" onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Leave Type</label>
                            <select name="leaveType" className="form-select" onChange={handleChange}>
                                <option value="SICK">Sick Leave</option>
                                <option value="CASUAL">Casual Leave</option>
                                <option value="PAID">Paid Leave</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Reason</label>
                            <textarea name="reason" className="form-control" rows="3" onChange={handleChange} placeholder="Why are you taking leave?" required></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary w-100">Submit Application</button>
                    </form>
                </div>

                {/* --- BOTTOM: HISTORY SECTION --- */}
                <div className="card shadow p-4">
                    <h3 className="mb-4">My Leave History</h3>
                    <div className="table-responsive">
                        <table className="table table-hover align-middle">
                            <thead className="table-light">
                                <tr>
                                    <th>Leave Type</th>
                                    <th>Dates</th>
                                    <th>Reason</th>
                                    <th>Status</th>
                                    <th>Admin Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaveHistory.length > 0 ? (
                                    leaveHistory.map((leave) => (
                                        <tr key={leave.id}>
                                            <td><strong>{leave.leaveType}</strong></td>
                                            <td>{leave.startDate} to {leave.endDate}</td>
                                            <td>{leave.reason}</td>
                                            <td>
                                                <span className={getStatusBadge(leave.status)}>
                                                    {leave.status}
                                                </span>
                                            </td>
                                            <td className="text-muted small">
                                                {leave.adminRemark || "No remarks yet"}
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="text-center text-muted">No leave requests found.</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}