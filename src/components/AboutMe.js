import React from 'react'
import Technologies from './Technologies'

const AboutMe = () => {
  return (
    <div className="bg-dark py-5" id="about-me">
      <div className="container">
        <div className="row row-cols-1 row-cols-xl-2">
          <div className="col px-5">
            <h2 className="display-3 text-light text-danger">About me</h2>

            <p className="text-light h4 py-4">Embarking on an exhilarating journey into the realm of remote development, I've poured countless hours into crafting a diverse array of projects. From designing dynamic landing pages that invite exploration to seamlessly integrating APIs, my portfolio is a testament to unbounded creativity and unwavering dedication.</p>
            <p className="text-light h4 py-4">My academic path stands as a monument to remarkable achievements, highlighting my skill in strategic thinking and unwavering determination when faced with difficult challenges. As you delve into my world of accomplishments, get ready to be inspired by the artistry of innovation and the strength of achievement.</p>
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