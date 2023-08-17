import React from 'react'
import Typed from 'react-typed';

const Header = () => {
  return (
    <div className="header-wraper" id="header">
      <div className="main-info">
        <h1 className='text-center comfortaa-font'>Hey there. I’m Matthieu Senou</h1>
        {/* <h2 className='text-center'>A Full-Stack Web developer</h2> */}
        <Typed 
          className="typed-text comfortaa-font"
          strings={["A Full-Stack Web developer", "A Software Engineer", "A Tech Enthusiast"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <p className='my-5 col-9 h4 text-light text-center quicksand-font'>Prepare to be captivated as I embark on crafting an extraordinary web app, seamlessly blending my expertise in JavaScript, React, Redux, Ruby, and Ruby on Rails. But that's just the tip of the iceberg – I'm an avid explorer of emerging technologies, fueled by a fervent passion for gaming and artificial intelligence. Brace yourself for an innovative journey that promises to redefine your digital experience, one line of code at a time.</p>
        <div className='mb-5 d-flex flex-column d-md-flex flex-md-row'>
          <a href="https://www.senoumatthieu96@gmail.com" target="blank" className="btn-main-offer mb-2 mx-3 quicksand-font">mailed me</a>
          <a href="#contacts" className="btn-main-offer mb-2 mx-3 quicksand-font">contact me</a>
        </div>
        <div className='row'>
          <a className='sm-icon col h4' href="https://www.linkedin.com/in/kodjo-matthieu-senou/" target="blank"><i className="bi bi-linkedin"></i></a>
          <a className='sm-icon col h4' href="https://github.com/Matthieu96Code" target="blank"><i className="bi bi-github"></i></a>
          <a className='sm-icon col h4' href="https://twitter.com/MatthieuSenou" target="blank"><i className="bi bi-twitter"></i></a>
          <a className='sm-icon col h4' href="https://www.facebook.com/matthieu.senou/" target="blank"><i className="bi bi-facebook"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Header