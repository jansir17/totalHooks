import { useState } from "react";

function MyUseState({startingValue, initialTheme}) {
  const [value,setValue]=useState(startingValue);
  const [theme,setTheme]=useState(initialTheme)

  const decrementValue =()=>{
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
export default MyUseState;