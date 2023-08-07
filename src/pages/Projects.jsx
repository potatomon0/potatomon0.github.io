import { useState, useEffect,useContext } from 'react'
import './Projects.css'
import { AppContext } from '../contexts/context'
import MyLinks from '../components/MyLinks'
import Dropdown from '../components/Dropdown'
import LeftArrow from '../components/LeftArrow'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'
import projectInfo from '../models/projectInfo'
import pj1Img from '../img/pj1Filler.png'
import pj2Img from '../img/pj2Filler.png'
import pj3Img from '../img/pj3Filler.png'
import pj4Img from '../img/pj4Filler.png'
import Navbar from '../components/Navbar'

function Projects() {
  const { pj1, pj2, pj3, pj4 } = useState(projectInfo)
  let {setOpen} = useContext(AppContext)
  const [done, setDone] = useState(undefined)
  useEffect(() => {
    setOpen(false);
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
            <div className="leftArrowBox">
              <LeftArrow />
              </div>
            <div className="hideMe"></div>
          </div>
          <div className="projectContainer">
            <h1 className="pageTitle">
              Web Developer Portfolio
            </h1>
            <div className="filterSection">Sort by tag</div>
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
              <Link to="/Project1" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj1Img} alt="" className="pjImg"/><h5>Project1</h5></div></Link>
            </div>
            <div className="project"><Link to="/Project2" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj2Img} alt="" className="pjImg"/><h5>Project2</h5></div></Link></div>
            <div className="project"><Link to="/Project3" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj3Img} alt="" className="pjImg"/><h5>Project3</h5></div></Link></div>
            <div className="project"><Link to="/Project4" style={{ textDecoration: 'none', color: '#C3CEDA' }}><div className="pjLinkDiv"><img src={pj4Img} alt="" className="pjImg"/><h5>Project4</h5></div></Link></div>
            </div>
          </div>
          <div className="right">
            <Dropdown />
            <div className="mainMylinks">
              <MyLinks rightLinks={"rightLinks"}/>
            </div>
            <div className="hideMe"></div>
          </div>
          <Navbar />
          <div className="hide"></div>
        </div>
      }
    </>
  )
}

export default Projects