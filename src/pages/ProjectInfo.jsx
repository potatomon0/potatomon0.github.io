import React from 'react'
import {useParams} from 'react-router-dom'

function ProjectInfo() {
  const p = useParams()
  const item = p.intro
  console.log("here: ", item)
  return (
    <div>here</div>
  )
}

export default ProjectInfo