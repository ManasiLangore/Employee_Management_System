import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Department() {
  const [departments, setDepartments] = useState([]);
    const [selectedDept, setSelectedDept] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [formData, setFormData] = useState({ name: '', description: '' });

    const API_URL = "http://localhost:8080/api/departments";

    useEffect(() => {
        fetchDepartments();
    }, []);

    const fetchDepartments = async () => {
        try {
            const response = await axios.get(API_URL);
            setDepartments(response.data);
        } catch (error) {
            console.error("Fetch error", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(API_URL, formData);
            setFormData({ name: '', description: '' });
            setShowForm(false);
            fetchDepartments();
        } catch (error) {
            alert("Check if department name already exists.");
        }
    };

    const filteredDepts = departments.filter(d => 
        d.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="container-fluid py-4 bg-light" style={{ minHeight: '100vh' }}>
            <div className="container">
                
                {/* --- HEADER & STATS --- */}
                <div className="row mb-4 align-items-center">
                    <div className="col-md-6">
                        <h2 className="fw-bold text-navy mb-1">Department Directory</h2>
                        <p className="text-muted">Manage organizational structure and team allocations</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <button 
                            className={`btn ${showForm ? 'btn-outline-danger' : 'btn-primary'} btn-lg shadow-sm px-4`}
                            onClick={() => setShowForm(!showForm)}
                        >
                            {showForm ? 'Close Form' : '+ Create Department'}
                        </button>
                    </div>
                </div>

                {/* --- QUICK STATS --- */}
                <div className="row mb-4">
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm p-3 text-center bg-white">
                            <small className="text-uppercase text-muted fw-bold">Total Departments</small>
                            <h3 className="mb-0 text-primary">{departments.length}</h3>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card border-0 shadow-sm p-3 text-center bg-white">
                            <small className="text-uppercase text-muted fw-bold">Total Personnel</small>
                            <h3 className="mb-0 text-success">
                                {departments.reduce((acc, curr) => acc + (curr.employees ? curr.employees.length : 0), 0)}
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <input 
                            type="text" 
                            className="form-control form-control-lg border-0 shadow-sm mt-2 mt-md-0" 
                            placeholder="🔍 Search departments..." 
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                {/* --- ADD FORM --- */}
                {showForm && (
                    <div className="card border-0 shadow mb-4 p-4">
                        <h5 className="fw-bold mb-3 text-primary">Department Registration</h5>
                        <form onSubmit={handleSubmit} className="row g-3">
                            <div className="col-md-5">
                                <label className="form-label small fw-bold">Department Name</label>
                                <input type="text" className="form-control" required value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})} />
                            </div>
                            <div className="col-md-5">
                                <label className="form-label small fw-bold">Strategic Description</label>
                                <input type="text" className="form-control" value={formData.description}
                                    onChange={(e) => setFormData({...formData, description: e.target.value})} />
                            </div>
                            <div className="col-md-2 d-flex align-items-end">
                                <button type="submit" className="btn btn-primary w-100 py-2">Deploy</button>
                            </div>
                        </form>
                    </div>
                )}

                {/* --- DEPARTMENT CARDS --- */}
                <div className="row g-4">
                    {filteredDepts.map((dept, index) => (
                        <div className="col-lg-4 col-md-6" key={dept.id}>
                            <div 
                                className="card h-100 border-0 shadow-sm dept-card-professional"
                                onClick={() => setSelectedDept(dept)}
                                style={{
                                    borderTop: `5px solid ${['#4e73df', '#1cc88a', '#36b9cc', '#f6c23e'][index % 4]}`,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="card-body p-4">
                                    <div className="d-flex justify-content-between">
                                        <h5 className="fw-bold mb-1 text-dark">{dept.name}</h5>
                                        <i className="bi bi-three-dots-vertical text-muted"></i>
                                    </div>
                                    <p className="text-muted small mb-4" style={{ minHeight: '40px' }}>
                                        {dept.description || "Core organizational unit focused on operational excellence."}
                                    </p>
                                    <div className="d-flex align-items-center justify-content-between pt-3 border-top">
                                        <div>
                                            <span className="small text-muted d-block">Team Size</span>
                                            <span className="fw-bold">{dept.employees?.length || 0} Members</span>
                                        </div>
                                        <button className="btn btn-light btn-sm text-primary fw-bold">Manage Members</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* --- EMPLOYEE LIST (PROFESSIONAL TABLE) --- */}
                {selectedDept && (
                    <div className="mt-5 p-4 bg-white shadow rounded-4 animate__animated animate__slideInUp">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div>
                                <h4 className="fw-bold mb-0 text-navy">{selectedDept.name} Personnel</h4>
                                <small className="text-muted">Currently viewing all active staff in this division</small>
                            </div>
                            <button className="btn btn-outline-secondary btn-sm rounded-pill" onClick={() => setSelectedDept(null)}>Close View</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-borderless align-middle">
                                <thead className="bg-light">
                                    <tr className="text-muted small text-uppercase">
                                        <th className="py-3">Employee</th>
                                        <th className="py-3">Role</th>
                                        <th className="py-3">Status</th>
                                        <th className="py-3">Direct Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {selectedDept.employees?.map(emp => (
                                        <tr key={emp.id} className="border-bottom">
                                            <td className="py-3">
                                                <div className="d-flex align-items-center">
                                                    <div className="avatar-circle me-3 bg-primary text-white text-center rounded-circle" style={{width: '35px', height: '35px', lineHeight: '35px'}}>
                                                        {emp.firstName.charAt(0)}
                                                    </div>
                                                    <span className="fw-bold">{emp.firstName} {emp.lastName}</span>
                                                </div>
                                            </td>
                                            <td>{emp.designation || 'Specialist'}</td>
                                            <td><span className="badge bg-success-soft text-success px-3 py-2 rounded-pill">Active</span></td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-2">Profile</button>
                                                <button className="btn btn-sm btn-outline-danger">Transfer</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>

            {/* Injected CSS for Hover Effects */}
            <style>{`
                .dept-card-professional:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 1rem 3rem rgba(0,0,0,0.1) !important;
                }
                .bg-success-soft { background-color: #eafaf1; }
                .text-navy { color: #0a2351; }
            `}</style>
        </div>
    );
}
