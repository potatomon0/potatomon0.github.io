import { useState, useEffect } from 'react'
import './Project.css'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'
import arrows from '../models/arrows'

function Project3() {
  const [done, setDone] = useState(undefined);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 600);
  }, []);
  return (
    <>
      {!done ? (
        <div className='loading'><ReactLoading
          type={"bubbles"}
          color={"#C3CEDA"}
          height={100}
          width={100}
        /></div>
      ) :
        <div className="projectMain">
          <div className="leftBtn"><Link to="/Project2" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
            <div className="leftArrow">{arrows.left}</div>
          </Link></div>
          <div className="center">
            <h2 className="title">Project Title 3</h2>
            <div className="info">Project information...</div>
            <div className="pjLink">Link button to prject</div>
            <div className="pjImgCarousel">PJ IMG Carousel</div>
            <div className="about">About this project</div>
            <div className="technical"></div>
          </div>
          <div className="rightBtn">
            <Link to="/Project4" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
              <div className="rightArrow">{arrows.right}</div>
            </Link></div>
        </div>
      }
    </>
  )
}

export default Project3