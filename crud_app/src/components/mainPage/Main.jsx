import React from 'react'
import Footer from '../global/Footer'
import MainContent from './MainContent'
import MainHeader from './MainHeader'

export default function Main() {
    return (
        <React.Fragment>
            <MainHeader />
            <MainContent />
            <Footer />
        </React.Fragment>
    )
}