import { useContext } from 'react'
import { AppContext } from '../contexts/context'
import Carousel from '../components/Carousel'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'
import MyLinks from '../components/MyLinks'
import './Main.css'
import Weather from "../components/Weather";
import Dropdown from '../components/Dropdown'

function Main() {
    let { data } = useContext(AppContext)
    return (
        <div className="main">
            <div className="mainContent">
                <div className="mainMylinks">
                    <MyLinks />
                </div>
                {/* <div className="wrapper"> */}
                {/* <div className="mainIntro"> */}
                <div className="textContainer">
                <h4 className="mainTextP1">Hello, my name is Hu and I am a current learner at Per Scholas accelerated</h4>
                <h4 className="mainTextP2">
                Software Engineering program where I am trained on Frontend and Backend Technologies. 
                </h4>
                </div>
                {/* </div>}

                {/* </div>                 */}
                {/* 
                <h4 className="mainTextP3">
                I have utilized ReactJS to create projects including this webpage. 
                </h4>
                <h4 className="mainTextP4">
                I also have made projects with only HTML5, CSS, and Javascript.
                </h4> */}
                <div className="rightArrowBox">
                    <div>
                    <Dropdown />
                    </div>
                    <div>
                    <Link to="/Projects" style={{ textDecoration: 'none' }}>
                        <div className="rightArrow">{arrows.right}</div>
                    </Link></div>
                </div>
                
            </div>
            <div className="mainWeather">
                <Weather />
            </div>
        </div>
    )
}

export default Main