import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    contactNo: "",
    role: "",
    empid: "",
    username: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8080/register", user);
      alert(res.data);
      navigate("/login"); // redirect after success
    } catch (err) {
      console.error(err);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Register</h3>
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                required
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              name="gender"
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Contact No"
              name="contactNo"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <select
                className="form-select"
                name="role"
                onChange={handleChange}
                required
            >
                <option value="">Select Role</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
            </select>
          </div>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Employee ID"
              name="empid"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              name="username"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 mb-3">
            Register
          </button>

          <div className="text-center">
            <span>Already have an account?</span>
            <button
              type="button"
              className="btn btn-primary ms-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}