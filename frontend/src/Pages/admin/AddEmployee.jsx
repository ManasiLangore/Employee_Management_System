import axios from 'axios';
import React, { useState } from 'react'
import AdminNav from './AdminNav';

export default function AddEmployee() {

    let [profile, setProfile] = useState("");
    let [firstname, setfirstname] = useState("");
    let [lastname, setlastname] = useState("");
    let [middlename, setmiddlename] = useState("");
    let [email, setemail] = useState("");
    let [contactno, setcontactno] = useState(0);
    let [gender, setgender] = useState("");
    let [dob ,setdob] = useState("");
    let [caddress, setcaddress] = useState("");
    let [paddress, setpaddress] = useState("");
    let [adharno ,setadharno] = useState(0);
    let [edu, setedu] = useState("");
    let[panno, setpanno] = useState("");
    let[exp, setexp] = useState("");
    let[salary, setsalary] = useState("");
    let[designation, setdesignation] = useState("");
    let [department, setdepartment] = useState("");
    let [reportingmanager, setreportingmanager] = useState("");
    let [worklocation ,setworklocation] = useState("");
    let [status, setstatus] = useState("");
    let [joiningdate, setjoiningdate] = useState("");
    

    //validation
    // let validation = () =>{
    //     if(firstname==""||lastname==""||middlename=""||)
    // }



    // hanfle sumbmit
    // const submit = (event)=>{
    //     event.preventDefault();

    //     if(validation()){
    //         alert("Registration successfully...")
    //     }

    //     setSubmittedData(formData)
    // }

    let handleprofile=(event)=>{
        let file = event.target.files[0]
        console.log(file.name);
        let filepath = `./img/${file.name}`;
        console.log(filepath)
        setProfile(filepath)
    }

    let addemp = (event) =>{

        event.preventDefault(); 

        let employee = {firstname,lastname,middlename,dob,gender,caddress,paddress,adharno,
            panno,profile,email,contactno,designation,department,salary,reportingmanager,exp,
            worklocation,status,joiningdate,edu
        }
        axios.post("http://localhost:8080/addemp",employee)
        .then((response)=>{
            if(response.data=="Employee record added sucessfully"){
                alert(response.data)
                alert("Employee record added sucessufully")
            }
        })
        .catch((error)=>{
            alert("Error in post opration...")
        })
    }

  return (
    <div className="container mt-4">

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

        <h3 className="mb-3">Add Employee</h3>

        <form onSubmit={addemp}>

            <h5>Personal Information</h5>

            <div className="row">

            <div className="col-md-4 mb-3">
                <label>First Name</label>
                <input type="text" 
                onChange={(event)=>{setfirstname(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-4 mb-3">
                <label>Middle Name</label>
                <input type="text" 
                onChange={(event)=>{setmiddlename(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-4 mb-3">
                <label>Last Name</label>
                <input type="text" 
                onChange={(event)=>{setlastname(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-6 mb-3">
                <label>Email</label>
                <input type="email" 
                onChange={(event)=>{setemail(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-6 mb-3">
                <label>Contact Number</label>
                <input type="text" 
                onChange={(event)=>{setcontactno(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-4 mb-3">
                <label>Gender</label>
<               select className="form-control" onChange={(event)=>{setgender(event.target.value)}}>
<                   option>Select Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    </select>
            </div>

            <div className="col-md-4 mb-3">
                <label>Date of Birth</label>
                <input type="date" 
                onChange={(event)=>{setdob(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-4 mb-3">
                <label>Education</label>
            <   input type="text" className="form-control"
            onChange={(event)=>{setedu(event.target.value)}}/>
            </div>

            <div className="col-md-6 mb-3">
                <label>Current Address</label>
                <input type="text" 
                onChange={(event)=>{setcaddress(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-6 mb-3">
                <label>Permanent Address</label>
                <input type="text" 
                onChange={(event)=>{setpaddress(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-6 mb-3">
                <label>Aadhar Number</label>
                <input type="text" 
                onChange={(event)=>{setadharno(event.target.value)}}
                className="form-control"/>
            </div>

            <div className="col-md-6 mb-3">
                <label>PAN Number</label>
                <input type="text" 
                onChange={(event)=>{setpanno(event.target.value)}}
                className="form-control"/>
            </div>

    </div>


    <h5 className="mt-3">Work Information</h5>

    <div className="row">

        <div className="col-md-4 mb-3">
            <label>Experience</label>
            <input type="number" 
            onChange={(event)=>{setexp(event.target.value)}}
            className="form-control"/>
        </div>

    <div className="col-md-4 mb-3">
        <label>Salary</label>
        <input type="number" 
        onChange={(event)=>{setsalary(event.target.value)}}
        className="form-control"/>
    </div>

    <div className="col-md-4 mb-3">
    <   label>Status</label>
        <select className="form-control" onChange={(event)=>{setstatus(event.target.value)}}>
            <option>Select Status</option>
            <option>Active</option>
            <option>Inactive</option>
        </select>
    </div>

    <div className="col-md-4 mb-3">
        <label>Designation</label>
        <input type="text" 
        onChange={(event)=>{setdesignation(event.target.value)}}
        className="form-control"/>
    </div>

    <div className="col-md-4 mb-3">
        <label>Department</label>
        <input type="text" 
        onChange={(event)=>{setdepartment(event.target.value)}}
        className="form-control"/>
    </div>

    <div className="col-md-4 mb-3">
        <label>Reporting Manager</label>
        <input type="text" 
        onChange={(event)=>{setreportingmanager(event.target.value)}}
        className="form-control"/>
    </div>

    <div className="col-md-6 mb-3">
        <label>Work Location</label>
        <input type="text" 
        onChange={(event)=>{setworklocation(event.target.value)}}
        className="form-control"/>
    </div>

    <div className="col-md-6 mb-3">
        <label>Joining Date</label>
        <input type="date" 
        onChange={(event)=>{setjoiningdate(event.target.value)}}
        className="form-control"/>
    </div>

</div>


    <h5 className="mt-3">Profile Image</h5>

    <div className="row">

        <div className="col-md-6 mb-3">
            <label>Upload Profile</label>
            <input type="file" accept="image/*" 
            onChange={(event)=>{handleprofile(event)}}
            className="form-control"/>
        </div>
        <div className='col-md-6 mb-3'>
            <label>Profile preview</label>
            <img src={profile}></img>
        </div>

    </div>

    <button className="btn btn-primary mt-3">Add Employee</button>

</form>
</main>
</div>
  )
}
