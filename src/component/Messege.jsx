import React from 'react'
import useSetStateWithLogging  from "../utils/useSetStateWithLogging"


const Messege = () => {

  const {log,setLog}=useSetStateWithLogging()

  return (
    <>
    <h1>hello Messege</h1>
    <h3>Your messege is: {log}</h3>
    <input placeholder='enter messege' onChange={e=>setLog(e.target.value)}/>
    </>
  )
}

export default Messege