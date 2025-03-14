
import './App.css'
import './props/Props'
function App() {
  const isGasPlanet= false;
  const users=[
    {name:"eman",isGasPlanet:true},
    {name:"ricky",isGasPlanet:true},
    {name:"santiago",isGasPlanet:true}

  ];
  


  return (

   <div className='App'>
    {users.map((users,key) =>users.isGasPlanet && <h1>{users.name}</h1>)}
      
    
   </div>

  )
}

export default App
