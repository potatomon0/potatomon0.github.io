import { useContext } from 'react'
import { AppContext } from '../contexts/context'
import Carousel from '../components/Carousel'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'
import MyLinks from '../components/MyLinks'
import './Main.css'
import Weather from "../components/Weather";

function Main() {
    let { data } = useContext(AppContext)
    return (
        <div className="main">
            <div className="mainContent">
                {/* <div>
        <Link to="/Projects" symbol="<" className="hideMe">{arrows.left}</Link>
        </div> */}
                <div className="mainMylinks">
                    <MyLinks />
                </div>
                <div className="mainIntro">Hello, my name is Hu and I am a current learner at Per Scholas accelerated SoftWare Engineering program where I am trained on Frontend and Backend Technologies. I have utilized ReactJS to create projects including this webpage. I also have made projects with only HTML5, CSS, and Javascript.</div>
                <div className="rightArrowBox">
                    <Link to="/Projects" style={{ textDecoration: 'none' }}>
                        <div className="rightArrow">{arrows.right}</div>
                    </Link>
                </div>
                
            </div>
            <div className="mainWeather">
                <Weather />
            </div>
        </div>
    )
}

export default Main