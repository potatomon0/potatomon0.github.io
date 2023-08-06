import React from 'react'
import './Project.css'

function Project1() {
  return (
    <div className="projectMain">
        <div className="leftBtn"> left </div>
        <div className="center">
        <h2 className="title">Project Title</h2>
        <div className="info">Project information...</div>
        <div className="pjLink">Link button to prject</div>
        <div className="pjImgCarousel">PJ IMG Carousel</div>
        <div className="about">About this project</div>
        <div className="technical"></div>
    </div>
    <div className="rightBtn"> right </div>
    </div>
  )
}

export default Project1