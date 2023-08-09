import React from 'react'

const Contacts = () => {
  return (
    <div className="bg-dark py-5" id="contacts">
      <p className="container-sm text-light text-center display-6 col-5 pb-5">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
      <div className="container-sm col-5">
        <div className="col-5"></div>
        <form className="container-sm col text-center" action="https://formspree.io/f/mlekdbwd" method="post">
          <div class="mb-3 mt-3">
            <label for="fullname" class="form-label">Full name:</label>
            <input type="text" class="form-control" id="fullname" placeholder="Full name" name="fullname"/>
          </div>
          <div class="mb-3 mt-3">
            <label for="email" class="form-label">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Email address" name="email"/>
          </div>
          <div class="mb-3">
            <label for="comment">Comments:</label>
            <textarea class="form-control" rows="5" id="comment" name="text"></textarea>
          </div>
          <button type="submit" class="col-4 btn btn-primary my-3">Submit</button>
        </form>
      </div>
      <div className='d-flex justify-content-center my-5'>
        <a className='mx-3 h4' href="https://www.linkedin.com/in/kodjo-matthieu-senou/" target="blank"><i className="bi bi-linkedin"></i></a>
        <a className='mx-3 h4' href="https://github.com/Matthieu96Code" target="blank"><i className="bi bi-github"></i></a>
        <a className='mx-3 h4' href="https://twitter.com/MatthieuSenou" target="blank"><i className="bi bi-twitter"></i></a>
        <a className='mx-3 h4' href="https://www.facebook.com/matthieu.senou/" target="blank"><i className="bi bi-facebook"></i></a>
      </div>
    </div>
  )
}

export default Contacts