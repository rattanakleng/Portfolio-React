import React from 'react'
import { List, ListItem } from '../../components/AboutList/AboutList'

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
            <h3 className="text-center"> Web Developer &amp; UX Designer</h3>

            <div className="row">
              <div className="col-lg-6">
                <List>
                  <ListItem text="Website:" children=" www.rattanakleng.com" />

                  <ListItem text="Phone:" children=" 206-669-6167" />

                  <ListItem text="Email:" children=" rleng@live.com" />
                </List>
              </div>

              <div className="col-lg-6">
                <List>
                  <ListItem text="City:" children=" Seattle, WA" />

                  <ListItem text="Freelance:" children=" Available" />

                  <ListItem text="City:" children=" Seattle, WA" />

                  <li>
                    <i className="icofont-rounded-right"></i>
                    <a
                      href="./assets/resume/rattanake-leng-resume.pdf"
                      download
                    >
                      <strong>Resume</strong>
                    </a>
                  </li>
                </List>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
