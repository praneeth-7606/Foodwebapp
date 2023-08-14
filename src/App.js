// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { FirebaseApp } from './components/firebase/app';
import Login from './components/login';
// import Login2 from './components/login2';
// import Signup    from './components/signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/navbar';
import Aboutus from './components/aboutus'
import Home from './components/home';
import Dashboard from './components/dashboard'
// import Signup from './components/signup';
// import image from './img.jpg'
import Dropdownlist from './components/dropdownlist';
import Mysecondpage from './components/mysecondpage';
import Mythirdpage from './components/mythirdpage';
import Buttons from './components/buttons';

// import Login from './components/login';
import Bootstarp from './components/bootstarp';
import Mainmenu from './components/mainmenu';





function App() {
  return (
    <div className="container">
      <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        
        <Route path="/" element={<Login/>}/>
        <Route path="/Navbar" element={<Navbar/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/dop" element={<Dropdownlist/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/contactus" element={<contactus/>}/>
        <Route path="/mainmenu" element={<Mainmenu/>}/>
        <Route path="/mysecondpage" element={<Mysecondpage/>}/>
        <Route path="/mythirdpage" element={<Mythirdpage/>}/>
        <Route path="/buttons"  element={<Buttons/>}/>
        {/* <Route path="/dropdown" element={<Dropdown/>}/> */}
        
        <Route path="/dp"  element={<Dropdownlist/>}/>

        
      </Routes>
      </BrowserRouter>
      
     
      
      
    </div>
  );
}

export default App;
