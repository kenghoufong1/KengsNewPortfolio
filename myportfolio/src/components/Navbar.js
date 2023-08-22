import React, { useEffect, useState } from 'react';
import {Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const[expandNavbar,SetExpandNavbar] = useState(false);
    
    const location = useLocation();

    useEffect(() => {
      SetExpandNavbar(false)
    },[location])

  return (
    <div className='navbar' id={expandNavbar?"open":"close"}>
        <div className='toggleButton'>
            <button 
              onClick={ () => {
              SetExpandNavbar((prev) => !prev);
              }}
            >
            <FontAwesomeIcon icon={faCaretDown} className="nav-icon" />
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/Projects"> Projects </Link>
            <Link to="/Skills"> Skills </Link>
        </div>
    </div>
  )
}

export default Navbar