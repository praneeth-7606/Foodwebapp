import React from 'react'
import { useNavigate } from 'react-router-dom'
// import Button from '@mui/material/Button'
// import Dropdownlist from './dropdownlist';

function Buttons() {
    const navigate=useNavigate();
     const changehandler=(e)=>{
        e.preventDefault()
        navigate("/dp")

     }
  return (

    <div className='button'>
        <center>
        {/* <Button className='bt1' onClick={changehandler} variant="contained"  color="success">ENERGY</Button>
        <Button className='bt2' variant="contained"  color="success">WATER</Button> */}
      <button className='bt1' onClick={changehandler}>ENERGY</button>
      <button className='bt2'>WATER</button>
      {/* <button></button>
      <button></button> */}
      </center>
    </div>
  )
}

export default Buttons
