import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper">
      <div className="main-info">
        <h1>web development and websites promotions</h1>
        <Typed 
          className="typed-text"
          string={["web Design", "web Developement", "Facebook Ads SMM", "Google Ads"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </div>
    </div>
  )
}

export default Header