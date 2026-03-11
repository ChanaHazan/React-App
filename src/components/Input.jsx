import React from 'react'
import { useDispatch } from 'react-redux'
import { setValue } from '../state/slice';

const Input = () => {
  const dispatch=useDispatch();
  
  return (
    <>
        <input onChange={(e)=>dispatch(setValue(e.target.value))}/>
    </>
  )
}

export default Input