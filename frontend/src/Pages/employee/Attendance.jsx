import React, { useState, useEffect } from "react";
import EmpNavbar from "./EmpNavbar";
import axios from "axios";
import { Fingerprint, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import './Attendance.css';

export default function Attendance() {
  const [status, setStatus] = useState("NOT_MARKED"); // NOT_MARKED, PENDING, PRESENT
    const [loading, setLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

    // Get the raw data
    const userData = localStorage.getItem("user");

    // Parse it safely
    const user = (userData && userData !== "[object Object]") ? JSON.parse(userData) : null;

    // Log this to check what your backend is actually sending
    console.log("Parsed User Object:", user);

    // Check both common naming conventions
    const employeeId =user?.empid;

    // Update the clock every second
    // useEffect(() => {

    //     // Log this to your console to confirm it's a number now
    //     console.log("Logged in User Object:", user);
    //     console.log("Target Employee ID:", employeeId);

    //     const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    //     return () => clearInterval(timer);
    // }, [user, employeeId]);

    useEffect(() => {
    const checkAttendanceStatus = async () => {
        if (!employeeId) return;
        
        try {
            // You'll need to create this endpoint in Spring Boot
            const res = await axios.get(`http://localhost:8080/api/attendance/today-status/${employeeId}`);
            
            // If the backend returns a record, update the UI status
            if (res.data && res.data.status) {
                setStatus(res.data.status); // e.g., "PENDING" or "PRESENT"
            }
        } catch (err) {
            console.error("Error fetching today's status", err);
        }
    };

    checkAttendanceStatus();
    
    const timer = setInterval(() => setCurrentTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
}, [employeeId]);


    
    const handlePunchIn = async () => {
      if (!employeeId) {
            alert("Error: Employee ID not found. Please log out and log in again.");
            return;
        }

    setLoading(true);
    try {
        // We use backticks (`) and ${} to put the variable in the string
        await axios.post(`http://localhost:8080/api/attendance/punch-in/${employeeId}`);
        
        setStatus("PENDING");
        alert("Request sent to Admin for approval!");
    } catch (err) {
        console.error("Attendance failed", err);
        if (err.response) {
        alert("Server Error: " + err.response.data);
        } else if (err.request) {
            alert("Backend not reachable (check if running)");
        } else {
            alert("Error: " + err.message);
        }
    } 
    finally {
        setLoading(false);
    }
};

  return (
    <div className="d-flex">
      <EmpNavbar></EmpNavbar>
      <div className="employee-attendance-card">
            <div className="time-display">
                <h2>{currentTime}</h2>
                <p>{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </div>

            <div className="punch-container">
                {status === "NOT_MARKED" && (
                    <button 
                        className="punch-btn" 
                        onClick={handlePunchIn} 
                        disabled={loading || status !== "NOT_MARKED"}
                    >
                        <div className="punch-icon">
                            <Fingerprint size={48} />
                        </div>
                        <span>
                          {loading ? "Processing..." : status === "PENDING" ? "Awaiting Approval" : "Punch In"}
                        </span>
                    </button>
                )}

                {status === "PENDING" && (
                    <div className="status-box pending">
                        <Clock size={32} />
                        <h3>Request Sent</h3>
                        <p>Waiting for Admin approval...</p>
                    </div>
                )}

                {status === "PRESENT" && (
                    <div className="status-box approved">
                        <CheckCircle size={32} />
                        <h3>Attendance Marked</h3>
                        <p>You are marked Present for today.</p>
                    </div>
                )}
            </div>

            <div className="info-footer">
                <AlertCircle size={14} />
                <span>Punch-in requests are sent to HR for verification.</span>
            </div>
        </div>
    </div>
    );
}