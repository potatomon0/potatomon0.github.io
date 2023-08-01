import {useContext} from 'react'
import {AppContext} from '../contexts/context'
import Carousel from '../components/Carousel'
import arrows from '../models/arrows'
import {Link} from 'react-router-dom'
import MyLinks from '../components/MyLinks'

function Main() {
    let {data} = useContext(AppContext)
  return (
    <div className="main">
        <div className="mainContent">
        {/* <Carousel arrow={arrows.left}/>
        <Carousel arrow={arrows.right}/> */}
        <Link to="/Projects" symbol="<" className="hideMe">{arrows.left}</Link>
        <div className="mainIntro">Hello, my name is Hu and I am a current learner at Per Scholas.</div>
        <div className="rightArrowBox">
        <Link to="/Projects" style={{textDecoration:'none',color:'white'}}>
            <div className="rightArrow">{arrows.right}</div>
        </Link>
        </div>
        </div>
        <div className="mainMylinks">
        <MyLinks />
        </div>
    </div>
  )
}

export default Main