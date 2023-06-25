import React from 'react'

const Project = (props) => {

  const project = props.project
  return (
    <section className="card">
      <h2 className="card-title">{project.title}</h2>
      <img src={project.img} alt={project.alt}/>
      <p className="card-text">{project.description}</p>
      <div className="card-link">
        <button className="btn btn-outline-danger">css</button>
        <button className="btn btn-outline-danger">html</button>
        <button className="btn btn-outline-danger">Java Script</button>
      </div>
      <button className="btn btn-warning">See project</button>
    </section>
  )
}

export default Project

