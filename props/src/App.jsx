
import './App.css'

function App() {

  return (
    <div className='App'>
      <Job salary={9000} posistion="Senior Software Engineer" company="Amazon"/>
      <Job salary={1200} posistion="Senior Software Developer" company="Netflix"/>


    </div>

     

     
    
  )
  
}
const Job =(props) =>{
  return(
   <div>
    <h1>{props.salary}</h1>
    <h1>{props.posistion}</h1>
    <h1>{props.company}</h1>
    

   </div>

  );

}

export default App
