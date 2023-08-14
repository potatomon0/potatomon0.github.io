import { useContext,useState,useEffect } from 'react'
import { AppContext } from '../contexts/context'
import RightArrow from '../components/RightArrow'
// import { Link } from 'react-router-dom'
import MyLinks from '../components/MyLinks'
import './Main.css'
import Weather from "../components/Weather";
import Dropdown from '../components/Dropdown'
import MainText from '../components/MainText'
import ReactLoading from 'react-loading'
import Navbar from '../components/Navbar'

function Main() {
    let {setOpen} = useContext(AppContext)
    const [done, setDone] = useState(undefined);
    useEffect(() => {
        setOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setTimeout(() => {
            setDone(true);
        }, 600);
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <Dropdown />
                    <RightArrow />
                </div>
            </div>
            <Navbar />
            <Weather />
            {/*// eslint-disable-next-line react-hooks/exhaustive-deps*/}
        </div>
}
        </>
    )
}

export default Main