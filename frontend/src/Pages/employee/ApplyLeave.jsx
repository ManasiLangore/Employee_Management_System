import React, { useState } from 'react';
import axios from 'axios';
import EmpNavbar from './EmpNavbar';

export default function ApplyLeave({empid}) {

    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        leaveType: 'SICK',
        reason: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Prepare the payload to match your Spring Boot Entity
        const payload = {
            ...formData,
            employee: { id: empid}, // Linking to the employee object
            status: 'PENDING'
        };

        try {
            await axios.post('http://localhost:8080/api/leaves/apply', payload);
            alert("Leave application submitted successfully!");
        } catch (error) {
            alert("Error: " + error.response?.data?.message || "Server error");
        }
    };

  return (
    <div className='d-flex'>
        <EmpNavbar></EmpNavbar>
    <div className="container mt-4">
            <div className="card shadow p-4">
                <h2 className="mb-4">Apply for Leave</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label>Start Date</label>
                            <input type="date" name="startDate" className="form-control" onChange={handleChange} required />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label>End Date</label>
                            <input type="date" name="endDate" className="form-control" onChange={handleChange} required />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Leave Type</label>
                        <select name="leaveType" className="form-select" onChange={handleChange}>
                            <option value="SICK">Sick Leave</option>
                            <option value="CASUAL">Casual Leave</option>
                            <option value="PAID">Paid Leave</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label>Reason</label>
                        <textarea name="reason" className="form-control" rows="3" onChange={handleChange} placeholder="Why are you taking leave?" required></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Submit Application</button>
                </form>
            </div>
        </div>
    </div>
  )
}
