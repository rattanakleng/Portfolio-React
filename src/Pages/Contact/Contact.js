import React from 'react'
import './Contact.css'
import ContactItem from '../../components/ContactItem/ContactItem'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="d-flex justify-content-around">
          <div className="row mt-1 d-flex justify-content-center mt-auto">
            <ContactItem
              icon="fas fa-map-marker-alt"
              text="Location:"
              info="Seattle, WA"
            />

            <ContactItem
              icon="fas fa-envelope"
              text="Email:"
              link="mailto: rleng@live.com"
              info="rleng@live.com"
            />

            <ContactItem
              icon="fas fa-phone"
              text="Call:"
              link="tel: 206-669-6167"
              info="206-669-6167"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
