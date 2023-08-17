import React from 'react'
import Project from './Project'
// import Technologies from './Technologies'
import projectList from './RecentWorks'

const Works = () => {

  return (
    <div className="bg-light" id="works">
      <div className="px-5">
        <h2 className="display-3 text-center pt-5 comfortaa-font">Works</h2>

        <div className="row py-5">
          {projectList.map((project) => (
            <div key={project.id} className="my-4 px-4 col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 col-xxl-6" >
              <Project project = {project} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Works