import React from 'react'

const Project = (props) => {

  const project = props.project
  return (
    <section className="project-card card h-100 px-5 py-5 rounded-5 bg-dark">
      <h3 className="card-title text-light comforta-font">{project.title}</h3>
      <img class="my-auto d-block h-75 img-fluid" src={project.img} alt={project.alt}/>
      <p className="card-text my-4 text-light quicksand-font">{project.description}</p>
      <div className="card-link row row-cols-auto my-2">
        {props.project.technologies.map((technology) => (
            <div key={technology.id} className="col">
              <a href={technology.link} className="btn btn-outline-light btn-sm quicksand-font">{technology.name}</a>
            </div>
          ))}
      </div>
      <div className='links row d-flex justify-content-between'>
        <a className="col-4 text-light btn btn-danger mt-4 quicksand-font" href={project.link} target="blank">Demo</a>
        {project.source && (
          <a className="col-4 text-light btn btn-danger mt-4 quicksand-font" href={project.source} target="blank">Source</a>
        )}
      </div>
    </section>
  )
}

export default Project

