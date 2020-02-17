import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Usuarios from '../global/Usuarios'
import Parceiros from '../global/Parceiros'

export default function MainContent() {
    return (
        <Switch>
            <Route exact path='/main/users' component={Usuarios} />
            <Route path='/main/parceiros' component={Parceiros} />
        </Switch>
    )
}
