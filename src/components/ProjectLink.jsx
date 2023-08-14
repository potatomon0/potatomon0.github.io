import React from 'react'
import GitImg from '../img/github.png'

function ProjectLink(props) {
  return (
    <div className="pjLinks">
        <a href={props.pj.git} target="_blank" rel="noreferrer"><img src={GitImg} alt="" className="gitLink"/></a>
    </div>
  )
}

export default ProjectLink