import React, { useEffect, useState } from "react";
import axios from "axios";
import { Check, X, User, Calendar, Clock, AlertCircle } from "lucide-react";
import AdminNav from "./AdminNav";
import "./AdminAttendance.css";

const AdminAttendance = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPending = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:8080/api/attendance/pending");
      console.log("Backend Data:", res.data);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPending();
  }, []);

  const handleUpdate = async (id, status) => {
    try {
        await axios.put(`http://localhost:8080/api/attendance/update/${id}?status=${status}`);
        fetchPending(); // refresh list
    } catch (err) {
        console.error(err);
    }
  };

  return (
    <div className="admin-wrapper">
      <AdminNav />
      <main className="main-content">
        <div className="dashboard-body p-4">
          
          <div className="welcome-header mb-4">
            <div className="welcome-text">
              <h1>Attendance Requests</h1>
              <p className="text-muted">Review and approve employee check-ins</p>
            </div>
          </div>

          {loading ? (
            <div className="text-center mt-5"><div className="spinner-border text-success"></div></div>
          ) : data.length > 0 ? (
            /* --- GRID LAYOUT INSTEAD OF TABLE --- */
            <div className="requests-grid">
              {data.map(item => (
                <div key={item.id} className="request-card-modern">
                  <div className="card-user-info">
                    <div className="avatar-circle-lg">
                      <User size={24} />
                    </div>
                    <div className="user-details">
                      <h3>Name : {item.firstname} {item.lastname}</h3>
                      <p className="emp-info-text">
                        Employee ID: {item.empId} | {item.department}
                      </p>
                      <span className="badge-status-pending">Waiting for Approval</span>
                    </div>
                  </div>

                  <div className="card-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                    <div className="meta-item">
                      <Clock size={16} />
                      <span>Regular Shift</span>
                    </div>
                  </div>

                  <div className="card-actions-row">
                    <button 
                      className="btn-approve-full"
                      onClick={() => handleUpdate(item.id, "PRESENT")}
                    >
                      <Check size={18} /> Approve
                    </button>
                    <button 
                      className="btn-reject-icon"
                      onClick={() => handleUpdate(item.id, "REJECTED")}
                      title="Reject Request"
                    >
                      <X size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <AlertCircle size={48} color="#cbd5e0" />
              <h3>No Pending Requests</h3>
              <p>Everything is up to date.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminAttendance;