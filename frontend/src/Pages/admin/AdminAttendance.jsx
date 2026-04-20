import React, { useEffect, useState } from 'react'
import axios from "axios";
import { AlertCircle } from "lucide-react";


import AdminNav from './AdminNav'
import "./AdminAttendance.css";

import { Calendar, Check, Clock, User, X } from 'lucide-react'
import { data } from 'react-router-dom';

export default function AdminAttendance() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchPending = async () => {
        setLoading(true);
        try {
        const res = await axios.get("http://localhost:8080/api/attendance/pending");
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

    const handleUpdate = (id, status) => {
        axios.put(`http://localhost:8080/api/attendance/update/${id}?status=${status}`)
            .then(() => fetchPending());
    };

  return (
    <div className='admin-wrapper'>
        <AdminNav></AdminNav>

        <main className='main-content'>
            <div className='dashboard-body p-4'>

                <div className='wlcome-header mb-4'>
                    <div className='welcome-text'>
                        <h1>Pending Attendance Request</h1>
                        <p className='text-muted'>Review and Approve employee check-ins</p>
                    </div>
                </div>

                {loading ? (
                    {/* <div className="text-center mt-5"><div className="spinner-border text-success"></div></div> */}
                ) : data.length > 0 ? (
                    <div className='request-grid'>

                        {data.map(item=> (

                        <div className='request-card-modern'>

                            <div className='card-user-info'>
                                <div className='avatar-circle-lg'>
                                    <User size={24}></User>
                                </div>

                                <div className='user-details'>
                                    <h3>Employee ID: </h3>
                                    <span className='badge-status-pending'>Waiting for Approval.</span>
                                </div>
                            </div>

                            <div className='card-meta'>
                                <div className='meta-item'>
                                    <Calendar size={16}></Calendar>
                                    <span></span>
                                </div>

                                <div className='meta-item'>
                                    <Clock size={16}></Clock>
                                    <span>Regular Shift</span>
                                </div>
                            </div>

                            <div className='card-actions-row'>
                                <button 
                                    className='btn-approve-full'
                                >
                                    <Check size={18}>Approve</Check>
                                </button>

                                <button
                                    className='btn-reject-icon'
                                >
                                    <X size={18}>Reject</X>
                                </button>
                            </div>
                        </div>
                        ))}

                    </div>
                ) : (
                    <div className="empty-state">
                        <AlertCircle size={48} color="#cbd5e0" ></AlertCircle>
                        <h3>No Pending Requests</h3>
                        <p>Everything is up to date.</p>
                        </div>
                    )}
            </div>
        </main>
    </div>
  )
}
