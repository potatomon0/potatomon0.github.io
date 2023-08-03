import {useState,useEffect} from 'react'
import './Projects.css'
import MyLinks from '../components/MyLinks'
import Dropdown from '../components/Dropdown'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading'

function Projects() {
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
      Projects</div>
      </div>
      <div  className="right">
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