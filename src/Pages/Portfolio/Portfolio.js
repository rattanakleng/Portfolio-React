/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './Portfolio.css'
import PortfolioItem from '../../components/PorfolioItem/PortfolioItem'

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Portfolio</h2>
        </div>

        <div class="row">
          <div
            class="col-lg-12 d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-blue">Peronal-Freelance-Graphic Design</h4>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <PortfolioItem
            imgLink="../../img/portfolio/group-project-2.jpg"
            projectName="Student Management System"
            description=" This project incorporates handlebars to serve a front-end application with MySQL serving as the database to store the backend date. The application is reliant on handlebars for rendering HTML and JS to the front end."
            livePageName="Live Page"
            livepageLink="https://rocky-everglades-87417.herokuapp.com/"
            repoLinkName="Respository"
            repoLink="https://github.com/rattanakleng/Student-Management-System"
          />

          <PortfolioItem
            imgLink="../../img/portfolio/note-taker.jpg"
            projectName="Note Taker"
            description="The app can be used to write, save, and delete notes and keep track of tasks need to complete. It builds with NodeJS Express. The note data save a JSON file."
            livePageName="Live Page"
            repoLinkName="Respository"
            livepageLink="https://notetaker-xpress.herokuapp.com"
            repoLink="https://github.com/rattanakleng/Note-Taker"
          />

          <PortfolioItem
            imgLink="../../img/portfolio/pizza-logger.jpg"
            projectName="Pizza Logger"
            description="The application was created with MySQL, Node, Express, Handlebars, and a custom ORM."
            livePageName="Live Page"
            repoLinkName="Respository"
            livepageLink="https://pizza-logger.herokuapp.com/"
            repoLink="https://github.com/rattanakleng/Pizza-Logger"
          />

          <PortfolioItem
            imgLink="../../img/portfolio/weather-dashboard.jpg"
            projectName="Weather Dashboard"
            description="The app allows users to check current and future weather conditions, temperature, humidity, wind speed, and the UV index for cities. This app developed with Server-Side OpenWeather API,
            https://openweathermap.org/api."
            livePageName="Live Page"
            repoLinkName="Respository"
            livepageLink="https://rattanakleng.github.io/Weather-Dashboard/"
            repoLink="https://github.com/rattanakleng/Weather-Dashboard"
          />

          <PortfolioItem
            imgLink="../../img/freelance/ratana-website.jpg"
            projectName="Architectural Portfolio"
            description="This website was built for an architect using Bootstrap and JavaScript."
            livePageName="Live Page"
            livepageLink="http://ratanasuon.website/index.html"
          />

          <PortfolioItem
            imgLink="../../img/interior-design/cover.jpg"
            projectName="Interior Design Portfolio"
            description=" The portfolio is a collection of interior design projects. The portfolio was designed with Adobe Indesign, Photoshop, and Illustrator."
            livePageName="Live Page"
            livepageLink="https://issuu.com/rattanakleng/docs/rattanak_leng_portfolio"
          />
        </div>
      </div>
    </section>
  )
}

export default Portfolio
