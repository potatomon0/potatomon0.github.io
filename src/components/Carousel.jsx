import {useState,useContext} from 'react'
import {AppContext} from '../contexts/context'
import {Link} from 'react-router-dom'


function Carousel(props) {
    let {count,setCount} = useContext(AppContext)

  return (
    <div className="carousel">
        <button className="CarouselBtn" onClick=<Link to="/Projects"/>> {props.arrow}</button>
    </div>
  )
}

export default Carousel