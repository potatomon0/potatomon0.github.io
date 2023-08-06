import { useState, useEffect } from 'react'
import './Project.css'
import ReactLoading from 'react-loading'
import { Link } from 'react-router-dom'
import arrows from '../models/arrows'
import projectInfo from '../models/projectInfo'
import ProjectTitle from '../components/ProjectTitle'
import ProjectIntro from '../components/ProjectIntro'
import ProjectLink from '../components/ProjectLink'
import Dropdown from '../components/Dropdown'

function Project2() {
  const pj = projectInfo[1]
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
          <div className="leftBtn"><Link to="/Project1" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
            <div className="leftArrow">{arrows.left}</div>
          </Link></div>
          <div className="center">
            <ProjectTitle pj={pj}/>
            <ProjectIntro pj={pj} />
            <ProjectLink pj={pj}/>
            <div className="pjImgCarousel">PJ IMG Carousel</div>
            <div className="about">About this project</div>
            <div className="technical"></div>
          </div>
          <div className="rightBtn">
          <Dropdown />
            <Link to="/Project3" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
              <div className="rightArrow">{arrows.right}</div>
            </Link></div>
        </div>
      }
    </>
  )
}

export default Project2