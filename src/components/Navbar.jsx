import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink to="/inicio">inicio</NavLink></li>
        <li><NavLink to="/contacto">contacto</NavLink></li>
        <li><NavLink to="/nosotros">nosotros</NavLink></li>
        <li><NavLink to="/producto">productos</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar
