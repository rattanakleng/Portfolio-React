import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row mt-1 d-flex justify-content-center mt-auto">
          <div className="d-flex justify-content-around">
            <div className="address d-flex align-items-center mr-5">
              <i className="fas fa-map-marker-alt"></i>
              <h4 className="ms-3">Location:</h4>
              <p className="ms-3">Seattle, WA</p>
            </div>

            <div className="email d-flex align-items-center mr-5">
              <i className="fas fa-envelope"></i>
              <h4 className="ms-3">Email:</h4>
              <a href="mailto: rleng@live.com" className="ms-3">rleng@live.com</a>
            </div>

            <div className="phone d-flex align-items-center">
              <i className="fas fa-phone"></i>
              <h4>Call:</h4>
              <a href="tel:206-669-6167" className="ms-3">206-669-6167</a>
            </div>

          </div>
        </div>

      </div>
    </section>
    )
}

export default Contact
