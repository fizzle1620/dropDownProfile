import { useEffect, useState } from 'react'
import './App.css'
import Axios from "axios";

function App() {
  const [name,setName]=useState("");
  const [age,setAge]=useState(null);
  const fentch=()=>{
    Axios.get(`https://api.agify.io/?name=${name}`)
    .then ((res)=>{
     setAge(res.data)
    });

  }

  return (
    <div>
      <input placeholder='Enter Your Name'  onChange={(event)=>{setName(event.target.value);}}/><br />
      <button onClick={fentch} >Predict</button>
      <h1>Name {age?.name}</h1>
      <h1>Predict Age {age?.age}</h1>
      <h1>count {age?.count}</h1>
    </div>
  )
}

export default App
