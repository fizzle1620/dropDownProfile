
import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const[catFact,setCatFact]=useState("");
  useEffect(()=>{
   
  },[]);
  const button =()=>{
    
    Axios.get("https://catfact.ninja/fact")
    .then((res)=>{
      setCatFact(res.data.fact);
    });
  }

    /*fetch("https://catfact.ninja/fact")
    .then((res) => res.json())
    .then ((data) =>{
      console.log(data);
    });*/

  
  return (
    <div>
      <button onClick={button} className="button">Generate</button>
      <p>{catFact}</p>
    </div>
      
  )
}

export default App
