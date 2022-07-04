import { useState, useRef, useEffect} from "react"

export default function MyUseRef(){
  const [name,setName]=useState('')
  const prevName = useRef('');

  
  useEffect(()=>{
    prevName.current=name
  },[name])
  
  return(
    <>
    <input value={name} onChange={(e)=>setName(e.target.value)}></input>
    <div>Now My Name is {name} and it was {prevName.current}</div>
    </>
  )
}