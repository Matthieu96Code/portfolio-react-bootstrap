import React from 'react'

const Contacts = () => {
  return (
    <div className="bg-dark py-5 row row-cols-1 row-cols-xl-2" id="contacts">
      <p className="container-sm text-light text-center display-6 col p-5 comfortaa-font">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
      <div className="container-sm col px-5">
        <form className="container-sm col text-center" action="https://formspree.io/f/mlekdbwd" method="post">
          <div class="mb-3 mt-3">
            <label for="fullname" class="form-label" />
            <input type="text" class="form-control quicksand-font" id="fullname" placeholder="Full name" name="fullname"/>
          </div>
          <div class="mb-3 mt-3">
            <label for="email" class="form-label" />
            <input type="email" class="form-control quicksand-font" id="email" placeholder="Email address" name="email"/>
          </div>
          <div class="mb-3">
            <label for="comment" />
            <textarea class="form-control quicksand-font" rows="5" id="comment" name="text"></textarea>
          </div>
          <button type="submit" class="col-md-3 col-lg-4 btn btn-danger my-3 quicksand-font">Submit</button>
        </form>
        <div className='text-center mt-4'>
          <h4 className='quicksand-font text-light'>Let's connect</h4>
          <div className='d-flex justify-content-center mt-4'>
            <a className='linkedin-icon quicksand-font sm-icon mx-3 h4' href="https://www.linkedin.com/in/kodjo-matthieu-senou/" target="blank"><i className="bi bi-linkedin"></i></a>
            <a className='github-icon quicksand-font sm-icon mx-3 h4' href="https://github.com/Matthieu96Code" target="blank"><i className="bi bi-github"></i></a>
            <a className='twitter-icon quicksand-font sm-icon mx-3 h4' href="https://twitter.com/MatthieuSenou" target="blank"><i className="bi bi-twitter"></i></a>
            <a className='facebook-icon quicksand-font sm-icon mx-3 h4' href="https://www.facebook.com/matthieu.senou/" target="blank"><i className="bi bi-facebook"></i></a>
            <a className='mail-icon quicksand-font sm-icon mx-3 h4' href="mailto:senoumatthieu96@gmail.com" target="blank"><i className="bi bi-envelope"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts