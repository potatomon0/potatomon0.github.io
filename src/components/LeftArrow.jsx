import React from 'react'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'

function LeftArrow() {
    return (
        <div>
            <Link to="/" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
                <div className="leftArrow">{arrows.left}</div>
            </Link>
        </div>
    )
}

export default LeftArrow