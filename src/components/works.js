import React from 'react'
import Project from './Project'

const Works = () => {

  const projectList = [
    {
      title: 'project 1',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      img: 'https://picsum.photos/id/20/200/300',
      alt: 'project one  picture',
      link: ''
    }
  ]

  return (
    <div className="bg-light">
      <div className="px-5">
        <h2 className="display-3 text-center pt-5">Works</h2>

        <div className="row py-5">
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
        </div>

        <div className="row py-5">
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
          <div className="col ">
            <Project project = {projectList[0]} />
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Works