import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoginPage from '../components/global/Login'
import { ContextConsumer } from './context/Context'
import Main from '../components/mainPage/Main'

export default function Routes() {
    return (
        <ContextConsumer>
            {
                value => {
                    const MainPage = ({ component: Component, ...rest }) => (
                        <Route  {...rest}
                            render={props => {
                                if (value.uiStore.isAuthenticated) return <Component {...props} />
                                else return <Redirect to='/' />
                            }}
                        />
                    )
                    return (
                        <Switch>
                            <Route exact path='/' component={LoginPage} />
                            <MainPage path='/main' component={Main} />
                        </Switch>
                    )
                }
            }
        </ContextConsumer>
    )
}