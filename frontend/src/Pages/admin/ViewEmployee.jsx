import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminNav from './AdminNav'

export default function ViewEmployee() {

  const [employees, setEmployees] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:8080/findallemp")
      .then((response)=>{
        setEmployees(response.data);
      })
      .catch(()=>{
        alert("Error in fetching data")
      })
  },[])

  //delete
  const deleteEmployee = (id)=>{
    axios.delete(`http://localhost:8080/deleteemp/${id}`)
    .then(()=>{
        alert("Employee Deleted Successfully")

        setEmployees(
            employees.filter((emp)=>emp.id !==id)
        )
    })
    .catch(()=>{
        alert("Error deleting employee")
    })
  }


  return (
    <div className="container-fluid">

      <AdminNav></AdminNav>

       <main className="main-content" style={{ marginLeft: '260px' }}>

        <header className="content-header">
          <div className="search-container">
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="admin-profile">
            <strong>Admin Name</strong>
          </div>
        </header>

      <div className="row">

      {employees.map((emp)=>(
        
        <div className="col-md-4 mb-2" key={emp.id}>

          <div className="card" style={{width:"18rem"}}>

            <img src={emp.profile} className="card-img-top" alt="profile"/>

            <div className="card-body">

              <h5 className="card-title">
                {emp.firstname} {emp.middlename} {emp.lastname}
              </h5>

              <div>
                <p>Contact No: <strong>{emp.contactno}</strong></p>
                <p>Email: <strong>{emp.email}</strong></p>
                <p>Department: <strong>{emp.department}</strong></p>
                <p>Designation: <strong>{emp.designation}</strong></p>
                <p>Work Location: <strong>{emp.worklocation}</strong></p>
              </div>

              <div className="d-flex gap-2">
                <button className="btn btn-warning"
                onClick={()=> deleteEmployee(emp.id)}
                >Delete</button>
                <button className="btn btn-danger">Update</button>
              </div>

            </div>

          </div>

        </div>

      ))}

      </div>
      </main>

    </div>
  )
}