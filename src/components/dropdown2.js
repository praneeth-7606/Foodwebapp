import React,{useState,useEffect} from 'react'

function Dropdown2() {
    const[name,setname]=useState([])
    const[value,setvalue]=useState('')

    useEffect(()=>{
        fetch("http://103.10.24.222:5050/metertype")
        .then(responce=>responce.json())
        .then(name=>{setname(name["Available Meters"])})
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
        <option key={name.meterID} value={name.nodeId} >{name.nodeId}</option>
        )
      )}
      </select>
      </center>
    </div>
  )
}

export default Dropdown2
