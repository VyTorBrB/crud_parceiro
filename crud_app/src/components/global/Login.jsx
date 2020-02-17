import React from 'react'
import { ContextConsumer } from '../../config/context/Context';
import $ from 'jquery'
import '../../assets/css/loginPage.css'

export default function LoginPage(props) {
    return (
        <ContextConsumer>
            {
                value => {
                    return (
                        // <div className="content">
                            <div className="wrapper fadeInDown" id="loginPage">
                                <div id="formContent">

                                    <div className="fadeIn first">
                                        <img src={''} id="icon" alt="User Icon" />
                                    </div>

                                    <form id="loginForm" method="post">
                                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                                        <input type="password" id="password" className="fadeIn third" name="senha" placeholder="senha" />

                                        <input
                                            type="submit"
                                            className="fadeIn fourth"
                                            value="Log In"
                                            onClick={e => {
                                                e.preventDefault()
                                                value.signIn({
                                                    login: $('#login').val(),
                                                    senha: $('#password').val()
                                                }, props)
                                            }}
                                        />
                                    </form>

                                    {/* <div id="formFooter">
                                    <a className="underlineHover" href=""><SpanWithText label="Esqueceu a senha?" /></a>
                                </div> */}

                                </div>
                            </div>
                        // </div>
                    )
                }
            }
        </ContextConsumer>
    )
}