import React from 'react'
import skills from './Skills'

const Technologies = () => {
  return (
    <div className='' id="skills">
      <div className=' container py-5 text-center'>
        <h2 className='display-3 text-light comfortaa-font'>Skills</h2>
        <div className='row'>
          {skills.map((skill) => (
            <div key={skill.id} className="col">
              <h3 className="text-light my-4 comfortaa-font h2" id={`heading${skill.category}`}>
                  {skill.category}
              </h3>
              <ul className="">
                {skill.skills.map((item) => (
                  <li className="list-unstyled my-3 quicksand-font"><a href={item.link} className="text-danger h4">{item.name}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Technologies