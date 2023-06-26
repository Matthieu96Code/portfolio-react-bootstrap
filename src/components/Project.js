import React from 'react'

const Project = (props) => {

  const project = props.project
  return (
    <section className="card h-100 px-3">
      <h2 className="card-title">{project.title}</h2>
      <img class="my-auto d-block h-75" src={project.img} alt={project.alt}/>
      <p className="card-text my-4">{project.description}</p>
      <div className="card-link">
        <button className="btn btn-outline-danger">css</button>
        <button className="btn btn-outline-danger">html</button>
        <button className="btn btn-outline-danger">Java Script</button>
      </div>
      <button className="btn btn-warning">
        <a className="text-black" href={project.link} target="blank" >See project</a>
      </button>
    </section>
  )
}

export default Project

