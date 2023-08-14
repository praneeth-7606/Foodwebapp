import React, { useState, useEffect } from 'react';

function Mythirdpage() {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    fetch('http://103.10.24.222:5050/site')
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        // Update options state with data from API 
        setOptions(data["Project Sites"]);
      })
      .catch(error => console.error(error));
  }, []); // Empty array as second argument to useEffect to only run once on component mount

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <label htmlFor="select-api">Select an option:</label>
      <select id="select-api" name="select-api" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Please choose an option--</option>
        {options.map(option => (
          <option key={option.siteId} value={option.siteName}>{option.siteName}</option>
        ))}
      </select>
    </div>
  );
}

export default Mythirdpage;
