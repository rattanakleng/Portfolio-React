import React from 'react'
import './Resume.css'

const Resume = () => {
  return (
    <div>
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Resume</h2>

            <a
              href="./assets/resume/rattanake-leng-resume.pdf"
              download
              className="text-orange px-3 py-1 rounded-4"
            >
              Download PDF File
            </a>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Relevant Experience</h3>
              <div className="resume-item pb-0">
                <p>
                  <em>
                    Branding, signage, and graphic design for Samsung and
                    Facebook/Oculus.
                  </em>
                </p>
              </div>

              <h3 className="resume-title">Education</h3>
              <div className="resume-item">
                <h4>Code Bootcamp Certificate</h4>
                <h5>Sep 2020 - Mar 2021</h5>
                <p>
                  <em>University of Washington, Bellevue, WA</em>
                </p>
                <p>
                  A 24-week intensive program focused on gaining technical
                  programming skills in HTML5, CSS3, Javascript, JQuery,
                  Bootstrap, Firebase, Node Js, MySQL, MongoDB, Express,
                  Handelbars.js & ReactJS.
                </p>
              </div>

              <div className="resume-item">
                <h4>Bachelor of Art in Interior Design</h4>
                <h5>Aug 2014 - May 2017</h5>
                <p>
                  <em>Washington State University, Pullman, WA</em>
                </p>
              </div>

              <div className="resume-item">
                <h4>AS in Architectural Building Technology</h4>
                <h5>Jan 2010 - Dec 2011</h5>
                <p>
                  <em>New England of Technology, East Greenwich, RI</em>
                </p>
              </div>

              <div className="resume-item">
                <h4>BA in Archaeology</h4>
                <h5>Jan 2010 - Dec 2011</h5>
                <p>
                  <em>Royal University of Fine Arts, Phnom Penh, Cambodia</em>
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Interior Designer</h4>
                <h5> May 2018 - Aug 2020</h5>
                <p>
                  <em>JPC Architects, Bellevue, WA </em>
                </p>
                <ul>
                  <li>Graphic, signage, and branding design.</li>

                  <li>
                    Work on space planning, construction documents, FF&E
                    schedule, and specifications.
                  </li>

                  <li>
                    Design interior space and 3D rendering and photoshop
                    editing.
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Intern Interior Designer</h4>

                <h5>Jun - Dec 2016</h5>

                <p>
                  <em>Lair Design, Seattle, WA</em>
                </p>

                <ul>
                  <li>
                    Work on space planning, construction documents, FF&E
                    schedule and specifications.
                  </li>

                  <li>
                    3D rendering and photoshop editing, and prepare design
                    presentations
                  </li>
                </ul>
              </div>

              <div className="resume-item">
                <h4>Intern Interior Designer</h4>

                <h5>Jun - Aug 2015</h5>

                <p>
                  <em>KDF Architects, Yakima, WA</em>
                </p>

                <ul>
                  <li>
                    Work on conceptual design, drafting, construction document,
                    and 3D rendering.
                  </li>

                  <li>
                    Work on FF&E schedule and specifications, submittals, and
                    presentation boards.{' '}
                  </li>
                  <li>Manage material library.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Resume
