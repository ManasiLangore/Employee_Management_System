import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";
import axios from "axios";

export default function Salary( {loggedInEmployeeId}) {
  
  const [payHistory, setPayHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    //we call the 'history' endpoint we created in the backend earlier
    axios.get(`http://localhost:8080/api/payroll/my-history/${loggedInEmployeeId}`)
      .then(res =>{
        setPayHistory(res.data);
        setLoading(false);
      })
      .catch(err =>{
        console.error("Error fetching payroll history", err);
        setLoading(false);
      })
  }, [loggedInEmployeeId]);

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
       <div className="spinner-border text-primary" role="status"></div>
       <span className="ms-2">Loading financial records...</span>
    </div>
  );



  return (

    <div className='d-flex bg-light' style={{ minHeight: '100vh' }}>
      <EmpNavbar></EmpNavbar>
      <div className="container-fluid p-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold text-dark">
            <span style={{ borderBottom: '4px solid #198754' }}>My Salary</span> History
          </h2>
          <span className="badge bg-success p-2">Secure Financial Portal</span>
        </div>

        {payHistory.length === 0 ? (
          <div className="card shadow-sm border-0 p-5 text-center">
            <i className="bi bi-wallet2 mb-3" style={{ fontSize: '3rem', color: '#ccc' }}></i>
            <h4 className="text-muted">No payroll records found yet.</h4>
            <p className="text-secondary">Your payslips will appear here once processed by HR.</p>
          </div>
        ) : (
          <div className="row">
            {payHistory.map((record) => (
              <div className="col-12 mb-3" key={record.id}>
                <div className="card shadow-sm border-0 overflow-hidden" style={{ borderRadius: '15px' }}>
                  <div className="d-flex">
                    {/* Left Color Bar */}
                    <div style={{ width: '10px', backgroundColor: '#198754' }}></div>
                    
                    <div className="card-body d-flex justify-content-between align-items-center p-4">
                      <div>
                        <h5 className="mb-1 fw-bold text-secondary">{record.payPeriod}</h5>
                        <p className="mb-0 text-muted small">
                          <i className="bi bi-calendar-check me-1"></i>
                          Paid on: {new Date(record.paymentDate).toLocaleDateString()}
                        </p>
                      </div>

                      <div className="text-center bg-light rounded p-2" style={{ minWidth: '150px' }}>
                         <span className="text-muted d-block small uppercase">Net Amount</span>
                         <h4 className="mb-0 fw-bold text-success">₹{record.netPay.toLocaleString()}</h4>
                      </div>

                      <div>
                        <button
                          className="btn btn-outline-primary btn-sm rounded-pill px-4 shadow-sm"
                          onClick={() => alert(`Generating PDF for ${record.payPeriod}...`)}
                        >
                          <i className="bi bi-download me-1"></i> Download
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
  </div>
);
}