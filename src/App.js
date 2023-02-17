
import './App.css';
import React, { useState } from 'react';

export default function App() {

  const [opations, setopations] = useState([]);
  const [data, setData] = useState('');


  const handleonchange = (event) => {
    event.preventDefault()

    setData(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setopations([...opations, data])

  }

  //const handleDropdownChange = (evnent) => {
  //setSelectedOPtion(event.target.value);
  //}

  return (
    <form onSubmit={handleSubmit}>

     <center><h1>Test</h1>
      <label htmlFor='name'> please enter value:
        <input type="text" value={data} onChange={handleonchange} />

      </label>

      <br></br>
      <br></br>
      <label htmlFor='dropdown'> Select an Option :</label>
      <select id="dropdown" value={opations} >
        {
          opations.map((value) => (
            <option value={value}> {value}</option>
          ))
        }
      </select >
      <br></br>
      <br></br>
      <input type="submit" value="Submit"></input>
      </center>
    </form>

  );
}



