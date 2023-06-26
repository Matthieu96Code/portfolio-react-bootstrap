import React from 'react'
import logo from '../logo.png'
// react font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="matt log" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#works">works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-me">about me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacts">contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar