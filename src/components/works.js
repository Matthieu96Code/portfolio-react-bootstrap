import React from 'react'
import Project from './Project'

const Works = () => {
  return (
    <div className="bg-light">
      <div className="container">
        <h2 className="display-3 text-center pt-5">Works</h2>

        <div className="row my-5">
          <div className="col">
            <Project />
          </div>
          <div className="col">
            <Project />
          </div>
          <div className="col">
            <Project />
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <Project />
          </div>
          <div className="col">
            <Project />
          </div>
          <div className="col">
            <Project />
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Works