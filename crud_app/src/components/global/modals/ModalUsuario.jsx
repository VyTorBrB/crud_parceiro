import React, { Component } from 'react'
import ModalFormBody from '../ModalFormBody';
import { SWAL_TOAST } from '../../../config/swalConfig';
import FormGroupUpdate from './FormGroupUpdate';
import { ContextConsumer, Context } from '../../../config/context/Context';
import { existsOrErr, equalsOrErr } from '../../../config/validationMethods';

export default class ModalUsuario extends Component {
    state = {
        id: '',
        nome: '',
        login: '',
        senha: '',
        confirmaSenha: ''
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => {
            return {
                id: nextProps.id,
                nome: nextProps.nome,
                login: nextProps.login,
            }
        })
    }

    idHandler = value => {
        this.setState(() => {
            return { id: value }
        })
    }

    nomeHandler = value => {
        this.setState(() => {
            return { nome: value }
        })
    }

    loginHandler = value => {
        this.setState(() => {
            return { login: value }
        })
    }

    senhaHandler = value => {
        this.setState(() => {
            return { senha: value }
        })
    }

    confirmaSenhaHandler = value => {
        this.setState(() => {
            return { confirmaSenha: value }
        })
    }

    saveHandler = () => {
        const tempState = { ...this.state }
        const { updateUser } = this.context

        try {
            existsOrErr(tempState.nome, 'Nome não informado')

            if (tempState.senha || tempState.confirmaSenha) {
                existsOrErr(tempState.senha, 'Senha não informada')
                existsOrErr(tempState.confirmaSenha, 'Confirmação de senha inválida')
                equalsOrErr(tempState.senha, tempState.confirmaSenha, 'Senhas não conferem')
            }
            else {
                delete tempState.senha
            }

        } catch (msg) {
            SWAL_TOAST(msg, 'warning')
            return
        }

        delete tempState.confirmaSenha

        updateUser(tempState)
    }

    render() {
        return (
            <ContextConsumer>
                {
                    value => {
                        return (
                            <ModalFormBody
                                id="modalUsuario"
                                large="modal-lg"
                                title={"Editar Usuário"}
                                onClick={this.saveHandler}>
                                <div className="row">
                                    <FormGroupUpdate
                                        id="login"
                                        placeholder="LOGIN"
                                        label="Login"
                                        value={this.state.login}
                                        onChange={this.loginHandler}
                                        type='text'
                                        disabled
                                    />
                                    <FormGroupUpdate
                                        id="nome"
                                        placeholder="NOME"
                                        label="*Informe o Nome"
                                        type="text"
                                        value={this.state.nome}
                                        onChange={this.nomeHandler}
                                    />
                                    <FormGroupUpdate
                                        id="senhaForm" placeholder="SENHA"
                                        label="Informe a Senha"
                                        type="password"
                                        value={this.state.senha}
                                        onChange={this.senhaHandler}
                                    />
                                    <FormGroupUpdate
                                        id="confirmaSenhaForm"
                                        placeholder="CONFIRMAR SENHA"
                                        label="Confirmar a Senha"
                                        type="password"
                                        value={this.state.confirmaSenha}
                                        onChange={this.confirmaSenhaHandler}
                                    />
                                </div>
                            </ModalFormBody>
                        )
                    }
                }
            </ContextConsumer>
        )
    }
}
ModalUsuario.contextType = Context