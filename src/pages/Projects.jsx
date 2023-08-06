import { useState, useEffect } from 'react'
import './Projects.css'
import MyLinks from '../components/MyLinks'
import Dropdown from '../components/Dropdown'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import pkmImg from '../img/pokemonBudgetGame.png'
import projectInfo from '../models/projectInfo'
import pj1Img from '../img/pj1Filler.png'
import pj2Img from '../img/pj2Filler.png'
import pj3Img from '../img/pj3Filler.png'
import pj4Img from '../img/pj4Filler.png'

function Projects() {
  const { pj1, pj2, pj3, pj4 } = useState(projectInfo)
  const [done, setDone] = useState(undefined)
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
        <div className="projectsMain">
          <div className="left">
            <div className="leftArrow">
              <div>
                <Dropdown />
              </div>
              <Link to="/" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
                <div className="rightArrow">{arrows.left}</div>
              </Link></div>
            <div className="hideMe"></div>
          </div>
          <div className="projectContainer">
            <h1 className="pageTitle">
              Web Developer Portfolio
            </h1>
            <div className="projects">
            {/*
              {projectInfo.map((project,i) => {
                const {name,intro,img}=project
                console.log(intro)
                return(
                  <Link to={`/ProjectInfo/${intro}`} key={i}>
                    <div className="project">
                      <div><img src={img} alt="" className="pjImg"/>
                      </div>{name}</div>
                    </Link>)}
                    )} */}
            <div className="project">
              <Link to="/Project1">Project1</Link>
            </div>
            <div className="project"></div>
            <div className="project"></div>
            <div className="project"></div>
            </div>
          </div>
          <div className="right">
            <div className="mainMylinks">
              <MyLinks />
            </div>
            <div className="hideMe"></div>
          </div>
        </div>
      }
    </>
  )
}

export default Projects