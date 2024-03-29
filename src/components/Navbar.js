import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-dark">
      <div className="container">
        <a className="navbar-brand pt-3 text-light" href="#header">Matthieu</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 my-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#header">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#works">works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-me">about me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">skills</a>
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