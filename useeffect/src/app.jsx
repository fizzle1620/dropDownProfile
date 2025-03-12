import {useEffect, useState} from "react";
import './app.css'
import {Text} from './Text';

export function App() {
  const [showText,SetShowText]= useState(false); 

  useEffect(()=>{
    document.title=("ASAN BILEN MO");
    if(showText){
    console.log("COMPONEND MOUNTED");
    }
    else{
      console.log("COMPONENT UNMONTED")
    }
  })

  return (
    <div>
      <button onClick={()=>{
        SetShowText(!showText);
      }}>
      
      Show Text
      </button>
      {showText && <Text/>}
    </div>
   
  )
}
export default App;