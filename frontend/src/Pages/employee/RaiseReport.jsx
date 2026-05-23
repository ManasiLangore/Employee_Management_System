import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EmpNavbar from "./EmpNavbar";

export default function RaiseReport() {
    // For testing, assuming logged-in employee ID is 1. 
    // In a real app, this comes from localStorage or login session context.
    const loggedInEmpId = 1; 

    const [myReports, setMyReports] = useState([]);
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("Payroll Issue");
    const [description, setDescription] = useState("");

    const API_URL = "http://localhost:8080/api/reports";

    useEffect(() => {
        fetchMyReports();
    }, []);

    const fetchMyReports = async () => {
        try {
            console.log("Fetching reports for Employee ID:", loggedInEmpId); 
            const response = await axios.get(`${API_URL}/employee/${loggedInEmpId}`);
            
            // Fixed the state overwrite issue here to keep your safety check intact
            const reportsArray = Array.isArray(response.data) ? response.data : [response.data];
            setMyReports(reportsArray);
            
            console.log("Backend Response Data:", response.data); 
        } catch (error) {
            console.error("Error fetching personal reports", error);
            setMyReports([]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newReport = {
            title,
            category,
            description,
            employee: { empid: loggedInEmpId }
        };

        try {
            await axios.post(`${API_URL}/submit`, newReport);
            alert("Report filed successfully with management!");
            setTitle("");
            setDescription("");
            fetchMyReports(); 
        } catch (error) {
            alert("Failed to submit report. Please try again.");
        }
    };

    return (
        <div className='d-flex'>
            <EmpNavbar/> 
            
                <div className="container mt-5 mb-5">
                    <h2 className="fw-bold mb-4" style={{ color: '#1a3a5f' }}>Grievance & Issue Reporting</h2>
                    
                    {/* Part A: Create/Raise Form */}
                    <div className="card border-0 shadow-sm p-4 mb-5 rounded-4">
                        <h4 className="fw-bold mb-3 text-secondary">File a New Report</h4>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small">Issue Summary / Title</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="e.g., Salary discrepancy for April month"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-bold small">Category</label>
                                    <select 
                                        className="form-select" 
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option>Payroll Issue</option>
                                        <option>Technical Support</option>
                                        <option>HR Grievance</option>
                                        <option>Workplace Admin</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-bold small">Detailed Description</label>
                                    <textarea 
                                        className="form-control" 
                                        rows="4" 
                                        placeholder="Explain your problem completely so management can understand..."
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-12 text-end">
                                    <button type="submit" className="btn btn-primary px-4 shadow-sm">Submit Issue Report</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Part B: Live Tracking Dashboard */}
                    <div className="card border-0 shadow-sm p-4 rounded-4 bg-white">
                        <h4 className="fw-bold mb-3 text-secondary">Your Historic Reports & Status Tracking</h4>
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Date Raised</th>
                                        <th>Title / Description</th>
                                        <th>Category</th>
                                        <th>Status</th>
                                        <th>Management Response / Remarks</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {myReports.length > 0 ? (
                                        myReports.map((rep) => (
                                            <tr key={rep.id}>
                                                <td>
                                                    {rep.createdAt 
                                                        ? new Date(rep.createdAt).toLocaleDateString()
                                                        : "N/A"}
                                                </td>
                                                <td>
                                                    <strong>{rep.title}</strong>
                                                    <br/>
                                                    <small className="text-muted">{rep.description}</small>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-dark border">{rep.category}</span>
                                                </td>
                                                <td>
                                                    <span className={`badge ${rep.status === 'PENDING' ? 'bg-warning text-dark' : 'bg-success'}`}>
                                                        {rep.status || 'PENDING'}
                                                    </span>
                                                </td>
                                                <td className="text-muted fst-italic">
                                                    {rep.adminRemark ? rep.adminRemark : <span className="text-black-50 small">Awaiting review...</span>}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="text-center py-4 text-muted">You haven't filed any issue reports yet.</td>
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