import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav'

export default function Department() {
    // --- State Management ---
    const [departments, setDepartments] = useState([]);
    const [selectedDept, setSelectedDept] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({ name: '', description: '' });

    const API_URL = "http://localhost:8080/api/departments";

    // --- API Effects ---
    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get(API_URL);
            setDepartments(response.data);
        } catch (error) {
            console.error("Error loading departments", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, formData);
            setFormData({ name: '', description: '' });
            setShowForm(false);
            fetchDepartments();

            console.log("Current Selected Dept Data:", selectedDept);
        } catch (error) {
            alert("Could not create department. Please check if the name is unique.");
        }
    };

    // --- UI Logic ---
    return (
        <div className="container-fluid">
        
              <AdminNav></AdminNav>
        
               <main className="main-content" style={{ marginLeft: '260px' }}>

                <header className="content-header">
                <div className="search-container">
                    <input type="text" placeholder="Search anything..." />
                </div>
                <div className="admin-profile" style={{paddingLeft:'550px'}}>
                    <strong>Admin Name</strong>
                </div>
                <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    A
                </div>
                </header>


        <div className="container-fluid py-5 bg-light" style={{ minHeight: '100vh', fontFamily: 'Segoe UI, sans-serif' }}>
            <div className="container">
                
                {/* 1. Dashboard Header */}
                <div className="row mb-5 align-items-center bg-white p-4 rounded-4 shadow-sm border-start border-primary border-5">
                    <div className="col-md-8">
                        <h1 className="fw-bold" style={{ color: '#1a3a5f' }}>Organization Structure</h1>
                        <p className="text-secondary mb-0">Manage departments and oversee team distribution</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <button 
                            className={`btn ${showForm ? 'btn-outline-danger' : 'btn-primary'} btn-lg px-4 shadow`}
                            onClick={() => setShowForm(!showForm)}
                            style={{ borderRadius: '10px' }}
                        >
                            {showForm ? 'Cancel' : '+ New Department'}
                        </button>
                    </div>
                </div>

                {/* 2. Add Department Form (Collapsible) */}
                {showForm && (
                    <div className="card border-0 shadow-lg mb-5 animate__animated animate__fadeIn">
                        <div className="card-body p-4">
                            <h4 className="fw-bold mb-4">Register New Division</h4>
                            <form onSubmit={handleSubmit} className="row g-3">
                                <div className="col-md-5">
                                    <label className="form-label fw-bold small">Department Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg bg-light" 
                                        placeholder="e.g., Software Testing" 
                                        required 
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    />
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label fw-bold small">Description</label>
                                    <input 
                                        type="text" 
                                        className="form-control form-control-lg bg-light" 
                                        placeholder="Briefly describe the department goals" 
                                        value={formData.description}
                                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                                    />
                                </div>
                                <div className="col-md-2 d-flex align-items-end">
                                    <button type="submit" className="btn btn-primary w-100 btn-lg shadow">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}

                
                {/* 3. Department Grid (The "Cards") */}
<div className="row g-4">
    {departments.length > 0 ? (
        departments.map((dept, index) => (
            <div className="col-lg-4 col-md-6" key={dept.id}>
                <div 
                    className={`card h-100 border-0 shadow-sm p-2 card-hover-effect ${selectedDept?.id === dept.id ? 'border-primary border-2' : ''}`}
                    onClick={() => setSelectedDept(dept)}
                    style={{ cursor: 'pointer', borderRadius: '15px', borderTop: '5px solid #0d6efd' }}
                >
                    <div className="card-body">
                        <h4 className="fw-bold text-dark">{dept.name}</h4>
                        <p className="text-muted small">{dept.description}</p>
                        <div className="text-primary fw-bold small">View Members &rarr;</div>
                    </div>
                </div>
            </div>
        ))
    ) : (
        <div className="col-12 text-center py-5">
            <div className="alert alert-info shadow-sm">
                No departments found in the database. Please use the <strong>+ New Department</strong> button above to add one.
            </div>
        </div>
    )}
</div>

                {/* 4. Detailed Employee List (The "Drill-Down") */}
                {selectedDept && (
                    <div className="mt-5 p-5 bg-white shadow-lg rounded-4 animate__animated animate__slideInUp border-top border-primary border-5">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <h2 className="fw-bold mb-1">{selectedDept.name} Members</h2>
                                <p className="text-muted">Reviewing active staff assigned to this division</p>
                            </div>
                            <button className="btn btn-outline-dark rounded-pill px-4" onClick={() => setSelectedDept(null)}>
                                Close Details
                            </button>
                        </div>

                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr className="text-muted small text-uppercase">
                                        <th className="py-3">Employee Name</th>
                                        <th className="py-3">Current Role</th>
                                        <th className="py-3">System Access</th>
                                        <th className="py-3 text-end">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedDept.employees?.length > 0 ? (
                                        selectedDept.employees.map(emp => (
                                            <tr key={emp.empid}>
                                                <td className="py-3">
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar me-3 bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center" style={{width:'40px', height:'40px'}}>
                                                            {emp.firstname ? emp.firstname.charAt(0) : 'E'}
                                                        </div>
                                                        <span className="fw-bold">{emp.firstname} {emp.lastname}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    {/* Automatically highlights Testers if they are in the list */}
                                                    <span className={`badge ${emp.designation?.toLowerCase().includes('tester') ? 'bg-warning text-dark' : 'bg-light text-dark'} border`}>
                                                        {emp.designation || 'Staff'}
                                                    </span>
                                                </td>
                                                <td><span className="text-success">● Active</span></td>
                                                <td className="text-end">
                                                    <button className="btn btn-sm btn-outline-primary me-2">Profile</button>
                                                    <button className="btn btn-sm btn-link text-danger">Transfer</button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-5 text-muted italic">
                                                No employees found in the {selectedDept.name} department.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Custom Professional Styling */}
            <style>{`
                .card-hover-effect {
                    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
                }
                .card-hover-effect:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.1) !important;
                }
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;  
                    overflow: hidden;
                }
                .bg-success-soft { background-color: #f0fdf4; }
                .animate__animated { animation-duration: 0.5s; }
            `}</style>
        </div>
        </main>
        </div>
    );
}
