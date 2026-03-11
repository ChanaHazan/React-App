import React from 'react'
import { useSelector } from 'react-redux'

const Messege = () => {
  const value=useSelector((state)=>state.slice.value)
  return (
    <>
     <h1>your messege:</h1>
     <h3>{value}</h3>
    </>
  )
}

export default Messege