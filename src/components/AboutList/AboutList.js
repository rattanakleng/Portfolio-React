import React from 'react'

export function List({ children }) {
  return <ul className="ps-5">{children}</ul>
}

export function ListItem({ text, children}) {
  return (
    <li>
      <strong>{text}</strong>
      {children}
    </li>
  )
}
