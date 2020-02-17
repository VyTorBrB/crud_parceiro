import React from 'react'
import globals from '../../config/globals'
import '../../assets/css/footer.css'
export default function Footer() {
    return (
        <footer className="footer">
            <div className="row justify-content-center">
                <span>{globals.footerText}</span>
            </div>
        </footer>
    )
}