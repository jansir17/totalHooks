import React from 'react'
import { useState, useEffect } from 'react'

function MyUseEffectHook() {
  const [resourceType, setResourceType]= useState('post');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize=()=>{
    console.log('width is changing');
    setWindowWidth(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleResize)

    return(()=>{
      window.removeEventListener('resize',handleResize);
    })
  },[])

  useEffect(()=>{
    console.log('resource has been changed')
  },[resourceType]);

  return (
    <>
    <button onClick={()=>{setResourceType('posts')}}>Posts</button>
    <button onClick={()=>{setResourceType('User')}}>Users</button>
    <button onClick={()=>{setResourceType('comments')}}>comments</button>
    <h1>{resourceType}</h1>
    <h1>{windowWidth}</h1>
    </>
  )
}
export default MyUseEffectHook