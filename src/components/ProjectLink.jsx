import React from 'react'
import GitImg from '../img/github.png'

function ProjectLink(props) {
  return (
    <div>
        <a href={props.pj.git} target="_blank"><img src={GitImg} alt="" className="gitLink"/></a>
    </div>
  )
}

export default ProjectLink