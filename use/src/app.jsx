
import './app.css'
import {useState} from "react";
export function App() {
  const [count,setCount] = useState(0);
  const increase=()=>{
    setCount(count + 1);
  }
  const decrease=()=>{
    setCount(count - 1);
  }
  const reset=()=>{
    setCount(0);
  }

  
  //let active= true;
  //let active2=false
  return (<div>
    
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={reset}>Set to Zero</button>
    {count}
   </div>
  )
}




/*const acctg=()=>{
  if(active){
    console.log("Active");
  

  }
 
}
const acctg2=()=>{
  active2= !active2;
  if(active2){
    console.log("In-Active");

  }
}
//<button onClick={acctg}>Active</button>
//<button onClick={acctg2}>In-Active</button>*/