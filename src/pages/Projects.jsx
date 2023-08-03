import React from 'react'
import './Projects.css'
import MyLinks from '../components/MyLinks'
import Dropdown from '../components/Dropdown'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'

function Projects() {
  return (
    <div className="projectsMain">
        <div className="leftArrow">
          <div>
            <Dropdown />
          </div>
          <Link to="/" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
            <div className="rightArrow">{arrows.left}</div>
          </Link></div>
        <div className="projectContainer">
        <h1 className="pageTitle">
        Web Developer Portfolio
      </h1>
      <div className="projects">
      Projects</div>
      </div>
        <div className="mainMylinks">
          <MyLinks />
        </div>
    </div>
  )
}

export default Projects