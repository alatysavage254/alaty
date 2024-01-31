import React, { useState } from 'react';
import './App.css';

function App() {

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [superPower, setsuperPower] = useState("");
  return (
    <div className="App">
    <h1>Metropolis</h1>
    <label>Name: </label>
    <input type="text" style={{margin : 10}} onChange={(event)=> {setName(event.target.value)}} />
    <label>Age: </label>
    <input type="number" style={{margin : 10}} onChange={(event) => {setAge(event.target.value)}} />  
    <label>Height: </label>
    <input type="text" style={{margin : 10}} onChange={(event) => {setHeight(event.target.value)}}/>
    <label>SuperPower: </label>
    <input type="text" style={{margin : 10}} onChange={(event) => setsuperPower(event.target.value)}/>
    
    {name}
    {age}
    {height}
    {superPower}
    </div>
    
  );
}

export default App;
