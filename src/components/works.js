import React from 'react'
import Project from './Project'

const Works = () => {

  const projectList = [
    {
      title: 'Togoville Jazz 2022',
      description: 'Togoville Jazz 2022 is a jazz festival website featuring two pages, multiple sections, and captivating HTML, CSS, and JavaScript animations. With a visually stunning design, it offers event details, artist profiles, and engaging interactivity. This immersive platform connects jazz enthusiasts, artists, and organizers for an unforgettable online celebration of music and culture.',
      img: './img/togoville jazz project.PNG',
      alt: 'Togoville Jazz 2022 project picture',
      link: 'https://matthieu96code.github.io/capstone-project1-concert/',
      source: 'https://github.com/Matthieu96Code/capstone-project1-concert'
    },
    {
      title: 'Math Magicians',
      description: 'Math Magicians is a captivating Single Page App (SPA) designed for mathematics enthusiasts. It features a user-friendly interface for simple calculations and provides random math-related quotes, sparking inspiration. With its minimalist design and interactive features, it offers an engaging platform for all fans of mathematics.',
      img: './img/Math magicians.PNG',
      alt: 'Math Magicians project picture',
      link: 'https://math-magicians-6gfp.onrender.com/',
      source: 'https://github.com/Matthieu96Code/math-magicians'
    },
    {
      title: 'Leader board',
      description: 'The Leaderboard website is a platform that showcases scores submitted by various players. With a sleek and user-friendly interface, it allows users to view and compare scores from different players across various games or activities. The website dynamically updates in real-time as new scores are submitted, providing a dynamic and engaging experience for participants and spectators alike. Stay informed, track progress, and foster healthy competition through the Leaderboard website.',
      img: './img/Leader board.PNG',
      alt: 'Leader board project picture',
      link: 'https://matthieu96code.github.io/leaderboard-project/dist/',
      source: 'https://github.com/Matthieu96Code/leaderboard-project'
    },
    {
      title: 'Currency metrics webapp',
      description: 'The Currency Metrics web app is a responsive application built using React and Redux. The app consists of two pages. The first page displays a comprehensive list of currency codes and names, providing users with an overview of various currencies. On the second page, users can select a specific currency and view its corresponding stock information.',
      img: './img/currencies metrics.PNG',
      alt: 'Currency metrics webapp project picture',
      link: 'https://metrics-webapp-jwa8.onrender.com/',
      source: 'https://github.com/Matthieu96Code/metrics-webapp'
    },
    {
      title: 'Bookstore',
      description: 'Bookstore is a straightforward website that showcases a book list and offers functionality to add and remove books. With a user-friendly interface, users can easily navigate through the displayed books, seamlessly add new entries, and remove existing ones, making it a convenient platform for managing book collections.',
      img: './img/bookstore.PNG',
      alt: 'Bookstore project picture',
      link: '',
      source: 'https://github.com/Matthieu96Code/bookstore'
    },
    {
      title: 'Space Traveler\'s Hub',
      description: 'Space Traveler\'s Hub is a dynamic website built with React and Redux. It offers an immersive platform for users to explore space missions and rockets. Users can join missions, reserve rockets, and access detailed information about each mission and rocket, creating an engaging experience for space enthusiasts and aspiring astronauts.',
      img: './img/rockets.png',
      alt: 'Space Traveler\'s Hub project picture',
      link: '',
      source: 'https://github.com/Matthieu96Code/spaceTravelersHub'
    },
  ]

  return (
    <div className="bg-light" id="works">
      <div className="px-5">
        <h2 className="display-3 text-center pt-5">Works</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 py-5">
          <div className="col mb-5">
            <Project project = {projectList[0]} />
          </div>
          <div className="col mb-5">
            <Project project = {projectList[1]} />
          </div>
          <div className="col mb-5">
            <Project project = {projectList[2]} />
          </div>
          <div className="col mb-5">
            <Project project = {projectList[3]} />
          </div>
          <div className="col mb-5">
            <Project project = {projectList[4]} />
          </div>
          <div className="col mb-5">
            <Project project = {projectList[5]} />
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default Works