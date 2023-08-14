import React,{useState,useEffect} from 'react'

function Dropdown1() {
    const[name,setname]=useState([])
    const[value,setvalue]=useState('')

    useEffect(()=>{
        fetch("http://103.10.24.222:5050/site")
        .then(responce=>responce.json())
        .then(name=>{setname(name["Project Sites"])})
        .catch(error=>console.error(error))
    },[])
    
    const changehandler1=(e)=>{
        setvalue(e.target.value)
    }
  return (
    <div>
      <center>
        <select id="select-api" name="select-api" value={value}  onChange={changehandler1}    >
        <option>please select the one of the below option</option>
      {
        name.map((name=>
        <option key={name.siteId} value={name.siteName} >{name.siteName}</option>
        )
      )}
      </select>
      </center>
    </div>
  )
}

export default Dropdown1
