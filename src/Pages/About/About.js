import React from 'react'

const About = () => {
  return (
    <div id="about" className="about my-5">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Full Stack Web Developer with a background in Branding and Graphic
            design and life-long dedication to learning. Effective at combining
            creativity and problem solving to develop user-friendly
            applications. Seeking a Jr. Developer position where I could apply
            my passion, professional experiences, and make a big contribution to
            bring the company to another level.
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3 className="text-center">UX Designer &amp; Web Developer.</h3>

            <div className="row">
              <div className="col-lg-6">
                <ul className="ps-5">
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Website:</strong>
                    www.rattanakleng.com
                  </li>

                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Phone:</strong> 206 669 6167
                  </li>

                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Email</strong> rleng@live.com
                  </li>
                </ul>
              </div>

              <div className="col-lg-6">
                <ul className="ps-5">
                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>City:</strong> Seattle, WA
                  </li>

                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <strong>Freelance:</strong> Available
                  </li>

                  <li>
                    <i className="icofont-rounded-right"></i>{' '}
                    <a
                      href="./assets/resume/rattanake-leng-resume.pdf"
                      download
                    >
                      <strong>Resume</strong>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
