import React from 'react'
import '../../assets/css/content.css'
export default function Content(props) {
    return (
        <div className="content">
            {props.children}
        </div>
    )
}