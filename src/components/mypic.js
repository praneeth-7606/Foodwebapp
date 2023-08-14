import React ,{useState}from 'react'

function Mypic() {
  const [selectedOption, setSelectedOption] = useState('');
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const actions = [
    { label: "LM", value: 1 },
    { label: "GM1", value: 2 },
    { label: "GM2", value: 3 }
  ];
  

  return (
    <div className='mypic'>
      <center>
      <label htmlFor="dropdown">Choose an options for the :</label><br></br>
      <select id="dropdown" value={selectedOption} onChange={handleOptionChange}>
     
        {actions.map((options) => (
          <option key={options.value} value={options.label}>
            
            {options.label}
          </option>
          
        ))}
      </select>
      </center>
    </div>
  )
}

export default Mypic
