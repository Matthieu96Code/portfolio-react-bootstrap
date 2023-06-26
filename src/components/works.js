import React from 'react'
import Project from './Project'

const Works = () => {

  const projectList = [
    {
      title: 'Togoville Jazz 2022',
      description: 'Projet Concert is a website dedicated to a jazz festival event, with two pages, multiple sections, and animations created using HTML, CSS, and JavaScript.',
      img: './img/togoville jazz project.PNG',
      alt: 'Togoville Jazz 2022 project picture',
      link: 'https://matthieu96code.github.io/capstone-project1-concert/',
      source: 'https://github.com/Matthieu96Code/capstone-project1-concert'
    },
    {
      title: 'Math Magicians',
      description: 'Math Magicians is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations and read a random math-related quote.',
      img: './img/Math magicians.PNG',
      alt: 'Math Magicians project picture',
      link: 'https://math-magicians-6gfp.onrender.com/',
      source: 'https://github.com/Matthieu96Code/math-magicians'
    },
    {
      title: 'project 1',
      description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
      img: 'https://picsum.photos/id/20/200/300',
      alt: 'project one  picture',
      link: 'https://matthieu96code.github.io/capstone-project1-concert/',
      source: 'https://github.com/Matthieu96Code/capstone-project1-concert'
    },
  ]

  return (
    <div className="bg-light">
      <div className="px-5">
        <h2 className="display-3 text-center pt-5">Works</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 py-5">
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
          <div className="col">
            <Project project = {projectList[1]} />
          </div>
          <div className="col">
            <Project project = {projectList[0]} />
          </div>
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

      </div>
    </div>
    
  )
}

export default Works