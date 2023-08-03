import React from 'react';

function DropdownItem(props){
    return (
      <li className="dropdownItem">
        <img src={props.img} alt="" />
        <a href="">{props.text}</a>
      </li>
    )
  }
  export default DropdownItem