import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
// import About from './About';





export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand"  to="/home">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/home">{props.home}</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutUs}</Link>  
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.followUs}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a className="dropdown-item" href="https://www.facebook.com/">Facebook</a></li>
              <li><a className="dropdown-item" href="https://www.instagram.com/">Instagram</a></li>
              {/* <li><hr className="dropdown-divider"/></li> */}
              <li><a className="dropdown-item" href="https://www.twitter.com/">Twitter</a></li>
            </ul>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
          </li> */}
          
        </ul>
        <form className="d-flex">
          {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button> */}
          <div className={`form-check form-switch text-${props.Mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.changeMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" id="darkBtntext">Dark Mode</label>
          </div>

          
          <Link className="joinButton" to="/join">{props.joinButton}</Link>    
          {/* <button className="joinButton" ><Link to="/about" >{props.joinButton}</Link></button> */}

        </form>    
      </div>
    </div>
  </nav>
  )
}
