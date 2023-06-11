import React from 'react'

const Technologies = () => {
  return (
    <div>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Languages
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item"><button className="btn btn-outline-danger">HTML</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">CSS</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">JavaScript</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">Ruby</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Frameworks
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item"><button className="btn btn-outline-danger">React.js</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">Ruby on Rails</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">Rspec</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">Redux</button></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Skills
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item"><button className="btn btn-outline-danger">Database Management</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">Version Control</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">CLI</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">API Design</button></li>
                <li class="list-group-item"><button className="btn btn-outline-danger">Web Development</button></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies