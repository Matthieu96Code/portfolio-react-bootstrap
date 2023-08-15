import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper" id="header">
      <div className="main-info">
        <h1 className='text-center'>Hey there. I’m Matthieu Senou</h1>
        <h2 className='text-center'>A Full-Stack Web developer</h2>
        <p className='my-5 col-9 h3 text-light text-center'>I'm excited to build an impressive web app with strong skills in JavaScript, React, Redux, Ruby, and Ruby on Rails. I'm also aware of new technologies and passionate about gaming and artificial intelligence.</p>
        <Typed 
          className="typed-text"
          strings={["Web Design", "Web Developement", "Testing", "Maintenance"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="https://www.senoumatthieu96@gmail.com" target="blank" className="btn-main-offer">contact me</a>
        <div className='row'>
          <a className='col h4' href="https://www.linkedin.com/in/kodjo-matthieu-senou/" target="blank"><i className="bi bi-linkedin"></i></a>
          <a className='col h4' href="https://github.com/Matthieu96Code" target="blank"><i className="bi bi-github"></i></a>
          <a className='col h4' href="https://twitter.com/MatthieuSenou" target="blank"><i className="bi bi-twitter"></i></a>
          <a className='col h4' href="https://www.facebook.com/matthieu.senou/" target="blank"><i className="bi bi-facebook"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Header