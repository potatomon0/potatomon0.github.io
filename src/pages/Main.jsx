import { useContext,useState,useEffect } from 'react'
import { AppContext } from '../contexts/context'
import arrows from '../models/arrows'
import { Link } from 'react-router-dom'
import MyLinks from '../components/MyLinks'
import './Main.css'
import Weather from "../components/Weather";
import Dropdown from '../components/Dropdown'
import MainText from '../components/MainText'
import ReactLoading from 'react-loading'

function Main() {
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
        <div className="main">
            <div className="mainContent">
                <div className="mainMylinks">
                    <MyLinks />
                </div>
                <div className="textContainer">
                    <MainText />
                </div>
                <div className="rightArrowBox">
                    <div>
                        <Dropdown />
                    </div>
                    <div>
                        <Link to="/Projects" style={{ textDecoration: 'none', color: '#C3CEDA' }}>
                            <div className="rightArrow">{arrows.right}</div>
                        </Link></div>
                </div>
            </div>
            <div className="mainWeather">
                <Weather />
            </div>
        </div>
}
        </>
    )
}

export default Main