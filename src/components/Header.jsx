import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
       <nav style={{ backgroundColor: "green", width: "100vw", position: "fixed", top: "0px", right: '0px', left: "0px", justifyContent: "space-around", height: "40px", display: "flex" }}>
      
      <div>
          <NavLink to='/' style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>דף הבית</NavLink>
      </div>
      <div>
          <NavLink to='/about' style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>אודות</NavLink>
      </div>
      <div>
          <NavLink to='/contact' style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>צור קשר</NavLink>
      </div>
       <div>
          <NavLink to='/countrypage' style={({ isActive }) => ({ color: isActive ? "white" : "black" })}>מדינות </NavLink>
      </div>
    
  </nav>
    </>
  )
}

export default Header