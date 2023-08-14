
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import React,{useState} from 'react'
// import firebase from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
// import axios from "axios"
// import ReCAPTCHA from 'react-google-recaptcha'
// import ReCAPTCHA from "react-google-recaptcha";
// import {auth} from './firebase';
import { Button } from '@mui/material';
import app from './firebase';

import image1 from './iconimage.png'
// import image2 from './pizzapic_1.png'
import React, { useState } from "react";
import { Input } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
 import FormControl from '@mui/material/FormControl';
// import EmailFillIcon from '@rsuite/icons/EmailFill';
// import { IconName } from "react-icons/fa";



function Login2() {
    const[data,setdata]=useState({Email:"",password:""})
    const{Email,password}=data
    const [verified,setverified]=useState(false)
    // const
    const navigate=useNavigate()
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submithandler=  ()=>{
   try{
    const response = fetch("http://localhost:3001/login",{
      method:"POST",
      hearders:{
        'content-type':"application/json",
      },
      body:JSON.stringify({Email,password})
    });
    if (response.ok) {
      alert('Login successful');
      navigate("/mainmenu")
      // Redirect the user to the desired page
    } else {
      const errorData = response.json();
      // setErrorMessage(errorData.message); // Update the error message state
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
   }
  
  
    const handleChange=()=>{
        setverified(true)
    }
    const signin=()=>{
     
    }
   
return (
    <div className='main'>
     
      <div className='left'>
            {/* <img src={image} alt="myimage" style={{width:"300px",height:"100px", padding:"20px" ,marginTop:"-10%"}} />  */}
           <center>
            <img src={image1} alt="myimage" style={{width:"500px",height:"550px"  }} />   
            </center>
           
      </div>
      <div className='right'>
        {/* <div className="rightin"> */}
      <Card variant="outlined"  className="card"> 
      {/* <img src={image2} alt="myimage" style={{width:"500px",height:"550px"  }} /> */}
      <center>
        <h1><strong>Welcome To Login Page</strong></h1>
      {/* <CardHeader title="Welcome To Login Page" /> */}
      
      <br></br>
      <FormControl onSubmit={submithandler}>

    {/* <form autocomplete="off" onSubmit={submithandler} >  */}
    {/* <EmailFillIcon></EmailFillIcon> */}
        <TextField type="Email"name="Email" id="outlined-basic" label="Email" placeholder="someone@gmail.com" 
        onChange={changehandler} variant="outlined" InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <EmailIcon/>
        </InputAdornment>
      ),}} /><br></br>
      
      {/* <input type="Email"  id="input-box" value={Email}  name="Email" placeholder="someone@gmail.com" onChange={changehandler}  /> */}
    
        <br></br>
        
        
      {/* <input type="password" id="input-box" value={password} name="password"  placeholder="*******" onChange={changehandler} /> */}
        <TextField type="password" id="outlined-basic"  size ="large" name="password"  label="Password"
         placeholder="**********"  onChange={changehandler} variant="outlined"
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <KeyIcon/>
            </InputAdornment>
          ),}} /><br></br>
        <br></br>
        <ReCAPTCHA  sitekey="6Ldz93onAAAAAKwU13yakOaBPCdv1giMk4Nz_JXr" data-scale="0.4" onChange={handleChange} />
        {/* <button type="submit" className='btnt'   disabled={!verified}>submit</button> */}
        <br></br>
        <Button type="submit" onClick={submithandler} className="btnt" variant="contained" disabled={!verified}>Login</Button>
        </FormControl>
        </center>
    {/* </form> */}
    </Card>
    {/* </div> */}
    
    </div>
      
      </div> 
  )

}
export default Login2;
