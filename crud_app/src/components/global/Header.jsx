import React from 'react'
import HeaderUserDropdown from './HeaderUserDropdown'
import '../../assets/css/header.css'

export default function Header(props) {
    return (
        <div className='header'>
            <div className="header-children-container">
                {
                    //@ts-ignore
                    props.children
                }
            </div>

            <HeaderUserDropdown />
        </div>
    )
}