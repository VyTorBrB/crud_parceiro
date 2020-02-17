import React from 'react'
import ContextProvider from './context/Context'
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

export default function App() {
    return (
        <ContextProvider>
            <HashRouter>
                <Routes />
            </HashRouter>
        </ContextProvider>
    )
}