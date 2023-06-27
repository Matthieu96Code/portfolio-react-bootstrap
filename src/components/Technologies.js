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
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">HTML</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">CSS</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">JavaScript</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Ruby</a></li>
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
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">React.js</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Ruby on Rails</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Rspec</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Redux</a></li>
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
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Database Management</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Version Control</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">CLI</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">API Design</a></li>
                <li class="list-group-item"><a href="#" className="btn btn-outline-danger">Web Development</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Technologies