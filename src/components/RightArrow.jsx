import React from 'react'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'

function RightArrow() {
  return (
    <div>
    <Link to="/Projects" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
        <div className="rightArrow">{arrows.right}</div>
    </Link>
</div>
  )
}

export default RightArrow