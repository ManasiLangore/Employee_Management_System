import React, {useState, useEffect} from 'react';
import AdminNav from './AdminNav';
import './AdminDashboard.css';


import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';
import { Users, UserPlus, Clock, Search, Bell, Layers } from 'lucide-react';//modern icons

export default function AdminDashboard() {

  const [adminName, setAdminName] = useState("user")

  useEffect( ()=>{
    const storedName = localStorage.getItem("user");
    if(storedName){
      const userData = JSON.parse(storedName);

      setAdminName(userData.firstName)
    }
  },[])

  const currentDate = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  return (
    <div className="admin-wrapper">
      <AdminNav />

      <main className="main-content">
        {/* Modern header*/}
        <header className="content-header">
          <div className="search-container">
            <Search className="search-icon" size={18}></Search>
            <input type="text" placeholder="Search employee, ID, or Dept..." />
          </div>

          <div className='add-emp'>
            <h6> + Add Employee</h6>
          </div>
          
          <div className='header-actions'>
            {/* <button className='icon-btn'><Bell size={20}></Bell></button> */}
            <div className="admin-profile">
              <div className='avatar'>A</div>
              <div className='admin-info'>
                <strong>{adminName}</strong>
              </div>
          </div>
          </div>
        </header>

        {/* Admin dashboard content*/}
        <div className='dashboard-body'>
          <div className='welcome-header'>
            <div className='welcome-text'>
              <h1>Welcome, {adminName}</h1>
              <p className="text-muted">Here is what's happening with your team today.</p>
            </div>

            <div className="date-box">
              <Calendar size={16} color="#7f8c8d" />
              <span>{currentDate}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className='stats-grid'>
            <div className='stat-card-white'>
              <div className='card-top'>
                <div className='stat-data'>
                  <p>Total Employees</p>
                  <h2>20</h2>
                </div>
                <div className='stat-icon-box bg-light-green'>
                  <Users color="#27ae60" size={24} />
                </div>
              </div>
              <Link to="/viewemp" className="card-action-link">
                View List 
              </Link>
            </div>

            <div className='stat-card-white'>
              <div className='card-top'>
                <div className='stat-data'>
                  <p>Total Departments</p>
                  <h2>05</h2>
                </div>
                <div className='stat-icon-box bg-light-green'>
                  <Layers color='#279aae' size={24}></Layers>
                </div>
              </div>
              <Link to="/departments" className="card-action-link">
                View Details 
              </Link>
            </div>

            <div className='stat-card-white'>
              <div className='card-top'>
                <div className='stat-data'>
                  <p>Pending Leaves</p>
                  <h2>05</h2>
                </div>
                <div className='stat-icon-box bg-light-yellow'>
                  <Clock color="#f39c12" size={24} />
                </div>
              </div>
              <Link to="/leaves" className="card-action-link">
                Review Requests 
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}