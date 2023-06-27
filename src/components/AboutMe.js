import React from 'react'
import Technologies from './Technologies'

const AboutMe = () => {
  return (
    <div className="bg-dark py-5" id="about-me">
      <div className="container">
        <div className="row row-cols-1 row-cols-xl-2">
          <div className="col p-5">
            <h2 className="display-3 h1 text-light text-danger">About me</h2>
            <p className="text-light h4">I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
          </div>
          <div className="col p-5">
            <Technologies />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe