import React from 'react'
import Technologies from './Technologies'

const AboutMe = () => {
  return (
    <div className="bg-secondary py-5" id="about-me">
      <div className="container">
        <div className="row ">

          <div className="col">
            <Technologies />
          </div>

          <div className="col">
            <h2 className="display-3 text-light">About me</h2>
            <p className="text-light">I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutMe