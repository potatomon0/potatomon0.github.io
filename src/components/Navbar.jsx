import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: '#C3CEDA' }}>About</Link>
      <Link to="/Projects" style={{ textDecoration: 'none', color: '#C3CEDA' }}>Projects</Link>
    </div>
  )
}

export default Navbar