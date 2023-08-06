import {useContext} from 'react';
import {AppContext} from '../contexts/context'
import DropdownItem from './DropdownItem'
import home from '../img/home.png'
import profile from '../img/user.png'
import contact from '../img/envelope.png'
import {Link} from 'react-router-dom'


function Dropdown(props){
  let {open,setOpen}=useContext(AppContext);
  return (
    <div className={props.rightLinks}>
      <div className="menu-container">
        <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
          <img src="https://cdn.imgbin.com/1/20/19/web-design-icon-drop-down-icon-menu-icon-83aTpn1X.jpg" alt="" />
          </div>
          <div className={`dropdown-menu ${open ? 'active':'inactive'}`}>
            <ul>
              <Link to="/"><DropdownItem img={profile} text={"About"}/></Link>
              <Link to="/Projects"><DropdownItem img={home} text={"Projects"}/></Link>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default Dropdown