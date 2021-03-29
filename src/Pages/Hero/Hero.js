import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div id="hero" className="d-flex justify-content-center mt-auto">
      <div className="my-auto translate-middle">
        <p>
          <span className="text-center text-white display-4"> I'm </span>
          <span className="text-center display-1 text-white">
            <strong>Rattanak Leng</strong>
          </span>
        </p>

        <h3 className=" text-center px-3 fs-4">Developer - Designer - Freelancer</h3>

        <div className="social-links text-center">
          <a href="https://github.com/rattanakleng" className="github info">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rattanak-leng-523660140/"
            className="linkedin "
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto: rleng@live.com">
            <i className="fas fa-envelope "></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
