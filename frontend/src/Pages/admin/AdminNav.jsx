import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../navbar.css';

export default function AdminNav() {
  return (
    <div className="admin-sidebar">
      <div className="sidebar-brand">
        <h2>EVM</h2>
        <span>Management System</span>
      </div>

      <ul className="sidebar-links">
        <li>
          <NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon">🏠</span> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/addemp" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon">👤+</span> Add Employee
          </NavLink>
        </li>
        <li>
          <NavLink to="/viewemp" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon">📋</span> View Employees
          </NavLink>
        </li>
        <li>
          <NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon"></span> Departments
          </NavLink>
        </li>
        <li>
          <NavLink to="/adminattendance" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon"></span>Attendance
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin/leave" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon"></span> Leave
          </NavLink>
        </li>
        <li>
          <NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon"></span> Payroll System
          </NavLink>
        </li>
        <li>
          <NavLink to="/admindashboard" className={({ isActive }) => isActive ? 'active-link' : ''}>
            <span className="icon"></span> Repots
          </NavLink>
        </li>
      </ul>

      <div className="sidebar-footer">
        <NavLink to="/login" className="logout-btn">
          Logout
        </NavLink>
      </div>
    </div>
  );
}