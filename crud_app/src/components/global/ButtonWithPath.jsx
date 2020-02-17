import React from 'react'
import { Link } from 'react-router-dom'
export default function ButtonWithPath(props) {

  return (
    <Link to={props.path}>
      <button className={props.classes} {...props} >{props.children} {props.label}</button>
    </Link>
  )
}
