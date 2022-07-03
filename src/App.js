import { useState } from "react";

function App() {
  const [value,setValue]=useState(()=>{return 4});
  const [theme,setTheme]=useState(()=>{return 'red'})

  const decrementValue =(e)=>{
    setValue((prevValue)=>prevValue-1);
    setTheme('black')
  }
    const incrementValue =()=>{
    setValue((prevValue)=>prevValue+1);
    setTheme('blue')
  }
  return (
    <center>
    <button onClick={decrementValue}>-</button>
    <span>{value}</span>
    <span>{theme}</span>
    <button onClick={incrementValue}>+</button> 
    </center>
  );
}
export default App;
