import React from 'react'

const ContactItem = ({icon, text, info, link}) => {
  return (
    <div className="d-flex align-items-center">
      <i className={icon}></i>
      <h4 className="ml-2">{text}</h4>
      <a href={link} className="mx-3">
        {info}
      </a>
    </div>
  )
}

export default ContactItem
