import React from 'react'
import skills from './Skills'

const Technologies = () => {
  return (
    <div>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {skills.map((skill) => (
        <div key={skill.id} className="accordion-item">
          <h2 className="accordion-header" id={`panelsStayOpen-heading${skill.category}`}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#panelsStayOpen-collapse${skill.category}`} aria-expanded="true" aria-controls={`panelsStayOpen-collapse${skill.category}`}>
              {skill.category}
            </button>
          </h2>
          <div id={`panelsStayOpen-collapse${skill.category}`} class="accordion-collapse collapse show" aria-labelledby={`panelsStayOpen-heading${skill.category}`}>
            <div className="accordion-body">
              <ul className="list-group list-group-horizontal row row-cols-auto">
                {skill.skills.map((item) => (
                  <li className="list-group-item col"><a href={item.link} className="btn btn-outline-success">{item.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Technologies