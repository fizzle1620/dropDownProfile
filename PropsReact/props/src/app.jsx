import Student from "./Student"

export function App() {
  return(
    <>
    <Student name ="Miguel" age={56} isStudent={true} />
    <Student name ="Wilfred" age={22} isStudent={false} />
    </>
  );
  
}
export default App