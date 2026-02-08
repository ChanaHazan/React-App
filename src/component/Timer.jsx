import React from 'react'
import useTimer from '../utils/useTimer'

const Timer = () => {
    const count=useTimer(1,3000)
  return (
    <>
    <h1>hello Timer</h1>
    <h2>count is: {count}</h2>
    </>
  )
}

export default Timer