import React from 'react'
import Project from './Project'
// import Technologies from './Technologies'
import projectList from './RecentWorks'

const Works = () => {

  return (
    <div className="bg-light" id="works">
      <div className="px-5">
        <h2 className="display-3 text-center pt-5">Works</h2>

        <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 row-cols-xl-3 py-5">
          {projectList.map((project) => (
            <div key={project.id} className="col mb-5 px-5">
              <Project project = {project} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  )
}

export default Works