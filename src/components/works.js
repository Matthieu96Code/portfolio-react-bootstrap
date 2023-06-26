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
      title: 'Leader board',
      description: 'The leaderboard website displays scores submitted by different players',
      img: './img/Leader board.PNG',
      alt: 'Leader board project picture',
      link: 'https://matthieu96code.github.io/leaderboard-project/dist/',
      source: 'https://github.com/Matthieu96Code/leaderboard-project'
    },
    {
      title: 'Currency metrics webapp',
      description: '',
      img: './img/currencies metrics.PNG',
      alt: 'Currency metrics webapp project picture',
      link: 'https://metrics-webapp-jwa8.onrender.com/',
      source: 'https://github.com/Matthieu96Code/metrics-webapp'
    },
    {
      title: 'Bookstore',
      description: 'Bookstore is a simple website that displays a list of books and allows you to add and remove books from that list.',
      img: './img/bookstore.PNG',
      alt: 'Bookstore project picture',
      link: '',
      source: 'https://github.com/Matthieu96Code/bookstore'
    },
    {
      title: 'Space Traveler\'s Hub',
      description: '',
      img: './img/rockets.png',
      alt: 'Space Traveler\'s Hub project picture',
      link: '',
      source: 'https://github.com/Matthieu96Code/spaceTravelersHub'
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
            <Project project = {projectList[2]} />
          </div>
          <div className="col">
            <Project project = {projectList[3]} />
          </div>
          <div className="col">
            <Project project = {projectList[4]} />
          </div>
          <div className="col">
            <Project project = {projectList[5]} />
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Works