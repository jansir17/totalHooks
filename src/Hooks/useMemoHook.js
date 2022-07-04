import { useState ,useMemo } from "react";

export default function MyUseMemo(){
  const [number,setNumber]=useState(0);
  const [dark,setDark]=useState(true);
  const doubleNumber = useMemo(()=>{
    return slowFunction(number)
  },[number]);
  const themeStyles ={
    backgroundColor: dark ? 'black':'white',
    color: dark? 'white':'black'
  }
  return(
    <>
    <input type="number" value={number} onChange={e=>setNumber(parseInt(e.target.value))}/>
    <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
    <div style={themeStyles}>{doubleNumber}</div>
    </>
  )
}

function slowFunction(value){
  console.log('calling your number wait')
  for(let i=0;i<1000000000;i++){}
  return value*2;
}