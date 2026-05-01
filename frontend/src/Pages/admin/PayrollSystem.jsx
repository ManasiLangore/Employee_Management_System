import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNav from './AdminNav';

export default function PayrollSystem() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEmp, setSelectedEmp] = useState(null);
  const [unpaidLeaves, setUnpaidLeaves] = useState(0);
  const [monthYear, setMonthYear] = useState("May 2026");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/employees");
      setEmployees(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching employees", err);
      setLoading(false);
    }
  };

  const handleProcessPayroll = async () => {
    try {
      await axios.post(`http://localhost:8080/api/payroll/generate`, null, {
        params: {
          employeeId: selectedEmp.id,
          monthYear: monthYear,
          unpaidLeaves: unpaidLeaves
        }
      });
      alert(`Success! Payroll generated for ${selectedEmp.firstname}`);
      setSelectedEmp(null);
      setUnpaidLeaves(0);
    } catch (err) {
      alert("Failed to process payroll. Check if already generated for this month.");
    }
  };

  const filteredEmployees = employees.filter(emp => 
    emp.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    emp.lastname.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          

        {/* Content Body */}
        <div className="container-fluid px-4">
          <div className="bg-white p-4 rounded shadow-sm mb-4">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h2 className="fw-bold mb-0">Payroll <span className="text-primary">Processing</span></h2>
                <p className="text-muted">Calculate and approve monthly employee salaries</p>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0 rounded-start-pill">🔍</span>
                  <input 
                    type="text" 
                    className="form-control border-start-0 rounded-end-pill" 
                    placeholder="Search employee by name..." 
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="card shadow-sm border-0 mb-5">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-dark">
                  <tr>
                    <th className="ps-4">Employee</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Annual Salary</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEmployees.map(emp => (
                    <tr key={emp.id}>
                      <td className="ps-4">
                        <div className="fw-bold text-dark">{emp.firstname} {emp.lastname}</div>
                        <small className="text-muted text-uppercase" style={{ fontSize: '10px' }}>ID: EMP-{emp.id}</small>
                      </td>
                      <td><span className="badge bg-soft-info text-primary border border-primary px-3">{emp.department || 'General'}</span></td>
                      <td>{emp.designation}</td>
                      <td className="fw-semibold">₹{parseFloat(emp.salary).toLocaleString()}</td>
                      <td className="text-center">
                        <button 
                          className="btn btn-primary btn-sm px-4 rounded-pill shadow-sm"
                          onClick={() => setSelectedEmp(emp)}
                        >
                          Process Pay
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Modal - Remains d-block for visibility logic */}
      {selectedEmp && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 1050 }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content border-0 shadow-lg">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title font-monospace">PAYSLIP GENERATOR</h5>
                <button type="button" className="btn-close btn-close-white" onClick={() => setSelectedEmp(null)}></button>
              </div>
              <div className="modal-body p-4">
                <div className="text-center mb-4">
                  <h4 className="mb-0 text-dark">{selectedEmp.firstname} {selectedEmp.lastname}</h4>
                  <span className="text-muted">{selectedEmp.designation}</span>
                </div>
                <hr />
                <div className="mb-3">
                  <label className="form-label fw-bold small text-uppercase">Billing Cycle</label>
                  <input type="text" className="form-control" value={monthYear} onChange={(e)=>setMonthYear(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold small text-uppercase">Unpaid Leaves (LOP)</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={unpaidLeaves} 
                    onChange={(e)=>setUnpaidLeaves(e.target.value)}
                  />
                  <div className="alert alert-warning py-2 mt-2" style={{ fontSize: '12px' }}>
                    <strong>Note:</strong> Daily rate deduction will apply for {unpaidLeaves} days.
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0">
                <button className="btn btn-light px-4" onClick={() => setSelectedEmp(null)}>Cancel</button>
                <button className="btn btn-success px-4" onClick={handleProcessPayroll}>Generate & Post</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}