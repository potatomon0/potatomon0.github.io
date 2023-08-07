import {useContext,useEffect,useRef} from 'react';
import {AppContext} from '../contexts/context'
import DropdownItem from './DropdownItem'
import home from '../img/home.png'
import profile from '../img/user.png'
import contact from '../img/envelope.png'
import {Link} from 'react-router-dom'
import dropdownIcon from '../img/dropdown_icon.png'

function Dropdown(props){
  let {open,setOpen}=useContext(AppContext);
  let menuRef=useRef()
  const error = ()=>{
    return(
      <div>Error</div>
    )
  }
  useEffect(()=>{
    let handler=(event)=>{

      if(!menuRef.current.contains(event.target)){
      setOpen(false);
    }
    }
    document.addEventListener("mousedown",handler)
    return()=>{
      document.removeEventListener("mousedown",handler)
    }
  },[])
  return (
    // event.target ? error:
    <div className={props.rightLinks}>
      <div className="menu-container" ref={menuRef}>
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <img src={dropdownIcon} alt="" />
          </div>
          <div className={`dropdown-menu ${open ? 'active':'inactive'}`}>
            <ul>
              <Link to="/">
                <DropdownItem img={profile} text={"About"}/></Link>
              <Link to="/Projects">
                <DropdownItem img={home} text={"Projects"}/></Link>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Dropdown