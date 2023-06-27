import React from 'react'

const Project = (props) => {

  const project = props.project
  return (
    <section className="card h-100 px-3">
      <h2 className="card-title">{project.title}</h2>
      <img class="my-auto d-block h-75" src={project.img} alt={project.alt}/>
      <p className="card-text my-4">{project.description}</p>
      <div className="card-link">
        <a href="#" className="btn btn-outline-danger">css</a>
        <a href="#" className="btn btn-outline-danger">html</a>
        <a href="#" className="btn btn-outline-danger">Java Script</a>
      </div>
      <a className="text-black btn btn-warning" href={project.link} target="blank" >See project</a>
    </section>
  )
}

export default Project

