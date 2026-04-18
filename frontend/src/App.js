import logo from './assets/logo.svg';
import './App.css';
import AddEmployee from './Pages/admin/AddEmployee';
import ViewEmployee from './Pages/admin/ViewEmployee';
import AdminDashboard from './Pages/admin/AdminDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/landing/Home';
import AboutUS from './Pages/landing/AboutUS';
import ContactUS from './Pages/landing/ContactUS';
import Services from './Pages/landing/Services';
import EmployeeDashboard from './Pages/employee/EmployeeDashboard';
import ShowEmployee from './Pages/employee/ShowEmployee';
import Register from './Pages/auth/Register';
import Login from './Pages/auth/Login';
import Profile from './Pages/employee/Profile';
import Attendance from './Pages/employee/Attendance';
import Salary from './Pages/employee/Salary';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <BrowserRouter>

        {/*  */}

        <Routes>
          <Route path='/addemp'
            element={<AddEmployee></AddEmployee>}
          ></Route>
          <Route path='/viewemp'
            element={<ViewEmployee></ViewEmployee>}
          ></Route>

          <Route path='/'
            element={<Home></Home>}
          ></Route>
          <Route path='/aboutus'
            element={<AboutUS></AboutUS>}
          ></Route>
          <Route path='/contactus'
            element={<ContactUS></ContactUS>}
          ></Route>
          <Route path='/service'
            element={<Services></Services>}
          ></Route>

          <Route path='/admindashboard'
            element={<AdminDashboard></AdminDashboard>}>
          </Route>

          <Route path='/showemp'
            element={<ShowEmployee></ShowEmployee>}
          ></Route>
          <Route path='/employeedashboard'
            element={<EmployeeDashboard></EmployeeDashboard>}
          ></Route>

          <Route path='/register'
            element={<Register></Register>}
          ></Route>

          <Route path='/login'
            element={<Login></Login>}
          ></Route>
          <Route path="/employee/profile" element={<Profile></Profile>} />
          <Route path="/employee/attendance" element={<Attendance></Attendance>} />
          <Route path="/employee/salary" element={<Salary></Salary>} />
        </Routes>
      </BrowserRouter>

      

      

      
      
    </div>
  );
}

export default App;
