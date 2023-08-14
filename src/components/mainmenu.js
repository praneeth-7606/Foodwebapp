import React,{useState} from 'react'
import {Button,Avatar} from '@mui/material'
import {Card} from '@mui/material';
// import GaugeChart from 'GaugeChart';
// import Gaugechart from './Gaugechart';
// D:\webdevelopment\loginreact\login\src\components\GaugeChart.js
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';/
// import { Button } from ;
// import {image} from './myp.png'
import {TextField} from '@mui/material';
import myimage from "./mydosa.png"
import image2 from "./image_2.png"
import myfood from "./gobi.png"
import myfood2 from "./vada.png"
import myfood3 from "./upma.png"
import myfood4 from "./idly1.png"
import food1 from "./chicken1.png"
// import food2 from "./idly1.png"
// import food3 from "./idly1.png"
// import food4 from "./idly1.png"
import './style.css'
// import Gaugechart from './GaugeChart';
import Gaugechart  from './gaugechart'

function Mainmenu() {
  const [option,setoption]=useState("")
  const changehandler=(e)=>{
    setoption(e.target.value)
  }
  return (
    <div className='mainmenu' >
        
      <div style={{display:"flex",justifyContent:'center'}}>
      {/* <center> */}
      <h1 style={{fontFamily:"'Belanosima', sans-serif"}} > Good Morning  </h1> <h1 style={{color:'#ce7d33',marginLeft:'0.5%',fontFamily:"'Belanosima', sans-serif"}}>Praneeth</h1>
  
      </div>
      <center>
      {/* <input className='input' type="text" style={{border:'none'}} placeholder="please search your items"/> */}
      <TextField   InputProps={{disableUnderline:true}}  style={{height:'50px', borderRadius:'15%',width:'30%', marginBottom:'40px'}}  placeholder=" Search for  dishes" id="outlined-basic" label="Search Dishes"  />
      </center>
      
      {/* <div className='items'> */}
      {/* <Stack direction="row" spacing={2}></Stack> */}
      {/* <Avatar alt="Remy Sharp" src="myp.png" width="20px" height="20px" /> */}

       <div className="items"> 
      {/*<Button className="bttn" variant="contained" color='secondary'>North India</Button>
      <Button className="bttn" variant="contained">South India</Button>
      <Button className="bttn" variant="contained">East India</Button>
      <Button className="bttn" color='secondary' variant="contained">West India</Button>
     
      </div >
       */}
  <Button variant='contained' style={{display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(87,111,57,255)',
  marginRight: '10px',
  fontWeight: 'bold',
  height:'0.9%',
  textTransform:'capitalize',
  borderRadius: '9%',
  padding: '1%',
  paddingLeft: '2%',
  paddingTop:'0.5%',
  fontFamily:"'Poppins'"}} className="bttn1"><span>South<br></br> Indian</span> <br></br> <img src={myfood2} alt="Button Image" height="40px" width="40px" style={{marginLeft:'30px'}} /></Button>
  
  <Button variant='contained'style={{display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ce7d33' ,
  marginRight: '10px',
  fontWeight: 'bold',
  height:'0.9%',
  textTransform:'capitalize',
  borderRadius: '9%',
  padding: '1%',
  paddingLeft: '2%',
  paddingTop:'0.5%',fontFamily:"'Poppins'"}}><span>North<br></br>Indian</span> <img src={myfood3} alt="Button Image" height="40px" width="40px" style={{marginLeft:'30px'}} /></Button>
       <Button variant='contained'style={{display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(87,111,57,255)',
  marginRight: '10px',
  fontWeight: 'bold',
  height:'0.9%',
  textTransform:'capitalize',
  borderRadius: '9%',
  padding: '1%',
  paddingLeft: '2%',
  paddingTop:'0.5%',fontFamily:"'Poppins'"}} className="bttn3"><span>West<br></br> Indian</span><img src={myfood4} alt="Button Image" height="40px" width="40px" style={{marginLeft:'30px'}} /></Button>
  {/* <Button variant='contained'></Button>      */}
  <Button variant='contained' style={{display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#ce7d33',
  marginRight: '10px',
  textTransform:'capitalize',
  fontWeight: 'bold',
  height:'0.9%',
  borderRadius: '9%',
  padding:'1%',
  paddingLeft: '2%',
  paddingTop:'0.5%',fontFamily:"'Poppins'"
  }} className="bttn4"><span>East<br></br> Indian</span><img src={myimage} alt="Button Image" height="40px" width="40px"style={{marginLeft:'30px'}} /></Button>
        {/* <input className="bttn" type='text' placeholder='North Indian' />
        <input  className="bttn" type='text' placeholder='West Indian' />
        <input className="bttn" type='text' placeholder='East Indian' />
        <input className="bttn" type='text'placeholder='South Indian' /> */}
      </div>
      <h2 className='heading'>Exploring todays special</h2>
      <div className='fooditems'>
      <div className='p'>
      <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Rava Idly</p>
      
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize',fontFamily:"'Poppins'", border: 'none', color: 'white', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Dosa</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize', fontFamily:"'Poppins'",border: 'none', color: 'white',  textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Poori</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36',fontFamily:"'Poppins'", textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer',fontFamily:"'Poppins', sans-serif ,'Roboto'"}}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Vada</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36', fontFamily:"'Poppins'",textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Puttu</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36',fontFamily:"'Poppins'", textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Semiya upma</p>
        <Button  variant="contained" style={{ backgroundColor: '#526b36', fontFamily:"'Poppins'",textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        
        
        </div>
        <div className='p'>
        <img src={image2} alt="" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Mysore Bonda</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36',fontFamily:"'Poppins'", textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
      <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Idiyappam</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36', fontFamily:"'Poppins'",textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
      <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Pongal</p>
        {/* <button className='bb' >Order Now</button> */}
        <Button  variant="contained" style={{ backgroundColor: '#526b36',fontFamily:"'Poppins'", textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
      <img src={image2} alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Appam</p>
        {/* <button className='bb' >Order Now</button> */}
        <Button  variant="contained" style={{ backgroundColor: '#526b36',fontFamily:"'Poppins'", textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        </div >
        <br></br>
        
        {/* <h3 style={{alignContent:'center',paddingLeft:'40px'}}>Vitals Parameter</h3>
        <div style={{ display:'flex',displayColoumn:'row',alignContent:'center',justifyContent:'center',marginTop:'5%'}}>
        
        <div className='yy' style={{textAlign:"center"}}>
          
        <Gaugechart value={84} units={"mg/dL"} />
        <p>Glucose Level</p>  
        </div>
        <div className='yy' style={{textAlign:"center"}}>
        <Gaugechart  value={125 } units={"mmHg"}/>
       
        <p>Systolic Blood Pressure</p> 
        </div>
        <div className='yy' style={{textAlign:"center"}}>
        <Gaugechart value={82} units={"mmHg"} />
        <p>Diastolic Blood Pressure</p> 
        </div>
        <div className='yy' style={{textAlign:"center"}}>
        <Gaugechart value={19} units={"kg/m2"} />
        <p>Body Mass Index</p>
        </div>

        </div> */}
     
      {/* <h3 className='h3'>Based on your vital parameters, consider having these dishes to stay fit and healthy</h3>
      <div className='fooditems'>
      <div className='p'>
      <img src="https://o.remove.bg/downloads/809f1360-edf0-4765-9a6d-a04160669133/myimage_1-removebg-preview.png" alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'> Idly(200kcal)</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src="https://o.remove.bg/downloads/809f1360-edf0-4765-9a6d-a04160669133/myimage_1-removebg-preview.png" alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Dosa(350kcal)</p>
     
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
      <img src="https://o.remove.bg/downloads/809f1360-edf0-4765-9a6d-a04160669133/myimage_1-removebg-preview.png" alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Pongal(430kcal)</p>
        
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
        <img src="https://o.remove.bg/downloads/809f1360-edf0-4765-9a6d-a04160669133/myimage_1-removebg-preview.png" alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Puttu(320kcal)</p>
      
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
        <div className='p'>
      <img src="https://o.remove.bg/downloads/809f1360-edf0-4765-9a6d-a04160669133/myimage_1-removebg-preview.png" alt="myfooditem" height="100px" width="120px"/>
        <br></br>
        <p className='p'>Appam(120kcal)</p>
      
        <Button  variant="contained" style={{ backgroundColor: '#526b36', textTransform:'capitalize', border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', display: 'inline-block', fontSize: '13px', margin: '', cursor: 'pointer' }}  >Order Now</Button>
        </div>
      </div>
         */}
        
        <h3 className='h3'>Order Your Meal</h3>
        

    <div className='np'>
    <p className='k'>Take Suggestions</p>
    <p >Custom Orders</p>
    </div> 
    <div className='btt1'>
    <Button  style={{ backgroundColor:'#526b36' , fontFamily:"'Poppins'",border: 'none', color: 'white', padding: '', textAlign: 'center', textDecoration: 'none', textTransform:'capitalize', display: 'inline-block', fontSize: '15px', marginRight: '4px', width:'125px',cursor: 'pointer' }}>casual visit</Button> 
    <Button variant="contained" disabled style={{  border: 'none', fontFamily:"'Poppins'",color: 'white', textAlign: 'center', textDecoration: 'none', textTransform:'capitalize', display: 'inline-block', fontSize: '13px',width:'125px', marginLeft: '4px', cursor: 'pointer' }}>special visit</Button>
    </div>
 
<h3 className='h3'>Select Your Food Style</h3>
<div className='last'>
<select  className="op1" value={option} onChange={changehandler}>
  {/* <option value="option">--select option--</option> */}
  <option value="option1">Light</option>
  <option value="option2">option2</option>
  <option value="option3">option3</option>

</select>
<p></p>
<select  className="op2" value={option} onChange={changehandler}>
  <option value="option1">Exotic</option>
  <option value="option2">option2</option>
  <option value="option3">option3</option>
</select>

<Button style={{  border: 'none', color: 'white', textAlign: 'center',fontFamily:"'Poppins'", textDecoration: 'none', textTransform:'capitalize', display: 'inline-block', fontSize: '10px',  borderRadius:'10px',marginLeft: '4%', cursor: 'pointer' }}variant="contained">Explore dishes</Button>
</div>  

    </div>
  )
}

export default Mainmenu
