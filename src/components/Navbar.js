import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";



export default function Navbar(props) {
  return (
  
<nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
  <Link className="navbar-brand" to="/">{props.title} </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          {props.home}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/About">
          About
        </Link>
      </li>
    </ul>

  </div>
  <div className="check">
     <div className={`form-check form-switch text-${(props.text) === "light"?"enable light mode":"Enable dark mode"}`}>
      <input className="form-check-input" type="checkbox" onClick = {props.tooglemode} role="switch" id="flexSwitchCheckChecked"/>
     <label className={`form-check-label text-${props.mode ==="light"?"black":"white"} `}htmlFor="flexSwitchCheckChecked">{`enable ${props.setnav} mode`}</label>
    
 </div>
     </div>

  </div>


</nav>
      
  
  )
}
Navbar.prototype = {
  title: PropTypes.string.isRequired,
  Home: PropTypes.string.isRequired

}
Navbar.defaultProps = {
  title: "Set title here",
  Home:"your home Name"
}