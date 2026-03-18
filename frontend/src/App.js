import logo from './logo.svg';
import './App.css';
import AddEmployee from './AddEmployee';
import ViewEmployee from './ViewEmployee';
import AdminDashboard from './AdminDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import AboutUS from './AboutUS';
import ContactUS from './ContactUS';
import Services from './Services';

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

        <AdminDashboard></AdminDashboard>

        <Routes>
          <Route path='/addemp'
            element={<AddEmployee></AddEmployee>}
          ></Route>
          <Route path='/viewemp'
            element={<ViewEmployee></ViewEmployee>}
          ></Route>
          <Route path='/home'
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
        </Routes>
      </BrowserRouter>

      

      

      
      
    </div>
  );
}

export default App;
