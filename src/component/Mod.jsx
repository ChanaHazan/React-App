import React from 'react'
import useToggle from '../utils/useToggle'

const Mod = () => {
    const {state,setState}=useToggle()
    return (
        <>
            <h1>hello Mode</h1>
            <button onClick={()=>setState(!state)}>{state ? "on" : "off"}</button>
        </>
    )
}

export default Mod