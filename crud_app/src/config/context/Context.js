import React, { Component } from 'react'
import initialContext from './initialContext'
import { SWAL_ERROR, SWAL_TOAST } from '../swalConfig'
import Axios from 'axios'
import globals from '../globals'
import { Redirect } from 'react-router-dom'
import $ from 'jquery'
import { existsOrErr, equalsOrErr } from '../validationMethods'
export const Context = React.createContext(initialContext)

export default class ContextProvider extends Component {
    constructor(props) {
        super(props)
        this.state = { ...initialContext }
    }

    checkState = () => {
        if (this.state.uiStore.isAuthenticated) {
            console.log('Esta authenticado: ' + this.state.uiStore.isAuthenticated)
            console.log(JSON.stringify(this.state.uiStore.userData))
        } else {
            console.log('Usuario nao logado')
        }
    }

    redirect = (props, to) => {
        this.checkState()
        $('#root').addClass('commonGrid hided-menu')
        props.history.push(`/${to}`)
    }

    getUsers = async () => {
        await Axios.get(`${globals.baseApiUrl}/users`)
            .then(res => this.setState({ users: res.data }))
            .catch((err) => { if (err.response) SWAL_ERROR(err.response.data) })
    }

    deletarUsuario = ({ id }) => {
        Axios.delete(`${globals.baseApiUrl}/users/${id}`)
            .then(res => {
                SWAL_TOAST(res.data, 'success')
                this.getUsers()
            })
            .catch((err) => { if (err.response) SWAL_ERROR(err.response.data) })
    }

    validaUsuario = data => {
        try {
            existsOrErr(data.nome, 'nome nao informado')
            existsOrErr(data.login, 'login nao informado')
            existsOrErr(data.senha, 'senha nao informado')
            existsOrErr(data.confirmaSenha, 'confirmacao de senha invalida')
            equalsOrErr(data.senha, data.confirmaSenha, 'senhas nao conferem')
        } catch (msg) {
            SWAL_TOAST(msg, 'warning')
            return
        }
        delete data.confirmaSenha

        Axios.post(`${globals.baseApiUrl}/users`, data)
            .then((res) => {
                SWAL_TOAST(res.data, 'success')
                this.getUsers()
            })
            .catch(err => { if (err.response) SWAL_ERROR(err.response.data) })
    }

    setHeaderToken = (token) => {
        Axios.defaults.headers.common['Authorization'] = `bearer ${token}`
    }

    updateUser = data => {

        Axios.put(`${globals.baseApiUrl}/users`, data)
            .then((res) => {
                SWAL_TOAST(res.data, 'success')
                this.getUsers()
            })
            .catch(err => { if (err.response) SWAL_ERROR(err.response.data) })
    }

    signIn = async (data, props) => {
        await Axios.post(`${globals.baseApiUrl}/signIn`, data)
            .then(res => {
                this.setState({
                    ...this.state,
                    uiStore: {
                        ...this.state.uiStore,
                        userData: res.data,
                        isAuthenticated: true
                    }
                }, () => {
                    this.setHeaderToken(res.data.token)
                    this.redirect(props, 'main')
                })
            })
            .catch(err => {
                const msg = err.response && err.response.data || 'Login Inválido'
                SWAL_ERROR(msg)
            })
    }

    validaParceiro = data => {
        try {
            existsOrErr(data.promotora, 'promotora nao informado')
            existsOrErr(data.cpf, 'cpf nao informado')
            existsOrErr(data.codigo, 'codigo nao informado')
            existsOrErr(data.token, 'token nao informado')
            existsOrErr(data.usuario, 'usuario nao informado')
            existsOrErr(data.senha, 'senha nao informado')
            existsOrErr(data.regiao, 'regiao nao informado')
        } catch (msg) {
            SWAL_TOAST(msg, 'warning')
            return
        }

        if (data.id) {
            Axios.put(`${globals.baseApiUrl}/parceiros`, data)
                .then(res => {
                    SWAL_TOAST(res.data, 'success')
                    this.getParceiros()
                })
                .catch(err => {
                    if (err.response) SWAL_ERROR(err.response.data)
                })
        }
        else {
            Axios.post(`${globals.baseApiUrl}/parceiros`, data)
                .then(res => {
                    SWAL_TOAST(res.data, 'success')
                    this.getParceiros()
                })
                .catch(err => {
                    if (err.response) SWAL_ERROR(err.response.data)
                })
        }
    }

    deletarParceiro = ({ id }) => {
        Axios.delete(`${globals.baseApiUrl}/parceiros/${id}`)
            .then(res => {
                SWAL_TOAST(res.data, 'success')
                this.getParceiros()
            })
            .catch(err => {
                if (err.response) SWAL_ERROR(err.response.data)
            })
    }

    getParceiros = () => {
        Axios.get(`${globals.baseApiUrl}/parceiros`)
            .then(res => {
                this.setState({ parceiros: res.data })
            })
            .catch(err => {
                if (err.response) SWAL_ERROR(err.response.data)
            })
    }

    signOut = () => {
        this.setState({
            ...this.state,
            uiStore: {
                userData: {},
                isAuthenticated: false
            }
        }, () => {
            $('#root').removeClass('commonGrid hided-menu showed-menu ')
            return <Redirect to="/" />
        })
    }

    render() {
        return (
            <Context.Provider value={{
                ...this.state,
                signIn: this.signIn,
                signOut: this.signOut,

                getUsers: this.getUsers,
                validaUsuario: this.validaUsuario,
                deletarUsuario: this.deletarUsuario,
                updateUser: this.updateUser,

                validaParceiro: this.validaParceiro,
                getParceiros: this.getParceiros,
                deletarParceiro: this.deletarParceiro
            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const ContextConsumer = Context.Consumer