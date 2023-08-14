import React,{useState} from 'react';
import axios from 'axios';

function Signup  (props) {
    const[data,setdata]=useState({Email:"",password:"",confirmpassword:"",number:""})
    const{Email,password,confirmpassword,number}=data;
    const changehandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
    }
    const submithandler=e=>{
        e.preventDefault();
        if(Email.length<5){
            alert('please enter a valid email')
        }
        else if(confirmpassword!==password){
            alert("passwords are not matched")
        }
        
        else if(number.length!==10){
            alert('please enter a valid phone number')
        }
        else {
            // e.preventDefault()
            axios.post('https://signupform-3e1d9-default-rtdb.firebaseio.com/login.json',data).then(()=>alert("submitted sucessfully"))


        }
            
        
        
    }
    return (
        <div>
            <form onSubmit={submithandler}>
                <label>Email</label><br></br>
                <input type="email" name="Email" onChange={changehandler} placeholder="phone or email" value={Email} /><br></br>
                <label>Password</label><br></br>
                <input type="password" value={password} onChange={changehandler}  placeholder="********" name="password"  /><br></br>
                <label>confirmpassword</label><br></br>
                <input type="password" name="confirmpassword"  value={confirmpassword} placeholder="*******" onChange={changehandler}/><br></br>
                <label>Number</label><br></br>
                <input type="number" name="number" value={number} placeholder="123456789" onChange={changehandler} /><br></br>
              
                <input  type="submit" name="submit" />
                {/* <button onClick={()=>props.onSwitch(<login/>)}></button> */}
                {/* <link to="">login page</link> */}
            </form>
        </div>
    );
}

export default Signup;
