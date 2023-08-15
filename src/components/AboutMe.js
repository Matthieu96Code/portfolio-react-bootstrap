import React from 'react'
import Technologies from './Technologies'

const AboutMe = () => {
  return (
    <div className="bg-dark py-5" id="about-me">
      <div className="container">
        <div className="row row-cols-1 row-cols-xl-2">
          <div className="col px-5">
            <h2 className="display-3 text-light text-danger">About me</h2>

            <p className="text-light h4 py-4">Diving deep into the realm of remote development, I've dedicated substantial hours to creating a diverse range of projects, spanning from dynamic landing pages to seamless API integrations. My academic journey reflects a remarkable achievement. This attests to my capacity for strategic and effective work, even when facing formidable challenges.</p>
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