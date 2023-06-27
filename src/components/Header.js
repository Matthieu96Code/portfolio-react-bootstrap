import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>Full Stack Web development</h1>
        <Typed 
          className="typed-text"
          strings={["Web Design", "Web Developement", "Testing", "Maintenance"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="https://www.senoumatthieu96@gmail.com" target="blank" className="btn-main-offer">contact me</a>
      </div>
    </div>
  )
}

export default Header