import React from 'react'

const Contacts = () => {
  return (
    <div className="bg-dark py-5" id="contacts">
      <p className="container-sm text-light text-center display-6 col-5 pb-5">I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</p>
      <div className="container-sm col-5">
        <div className="col-5"></div>
        <form className="container-sm col" action="https://formspree.io/f/mlekdbwd" method="post">
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
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input class="form-check-input" type="checkbox" name="remember"/> Remember me
            </label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contacts