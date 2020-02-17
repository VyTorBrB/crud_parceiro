import React, { Component } from 'react'
import ModalFormBody from '../ModalFormBody'
import { ContextConsumer } from '../../../config/context/Context'
import FormGroupUpdate from './FormGroupUpdate'

export default class InsertModalParceiro extends Component {
    state = {
        id: '',
        promotora: '',
        cpf: '',
        codigo: '',
        token: '',
        usuario: '',
        senha: '',
        regiao: ''
    }

    handleChange = (property, data) => {
        this.setState({ [property]: data })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            id: nextProps.id ? nextProps.id : '',
            promotora: nextProps.promotora ? nextProps.promotora : '',
            cpf: nextProps.cpf ? nextProps.cpf : '',
            codigo: nextProps.codigo ? nextProps.codigo : '',
            token: nextProps.token ? nextProps.token : '',
            usuario: nextProps.usuario ? nextProps.usuario : '',
            senha: nextProps.senha ? nextProps.senha : '',
            regiao: nextProps.regiao ? nextProps.regiao : '',
        })
    }

    render() {
        return (
            <ContextConsumer>
                {
                    value => {
                        return (
                            <ModalFormBody
                                title='Atualizar parceiro'
                                onClick={() => value.validaParceiro(this.state)}
                                id='modalParceiros'>
                                <div className="row">
                                    <FormGroupUpdate
                                        placeholder='PROMOTORA'
                                        value={this.state.promotora}
                                        onChange={promotora => this.setState({ promotora })}
                                        type='text'
                                    />
                                    <FormGroupUpdate
                                        placeholder='CPF'
                                        value={this.state.cpf}
                                        onChange={cpf => this.setState({ cpf })}
                                        type='text'
                                    />
                                    <FormGroupUpdate
                                        placeholder='CODIGO'
                                        value={this.state.codigo}
                                        onChange={codigo => this.setState({ codigo })}
                                        type='text'
                                    />
                                    <FormGroupUpdate
                                        placeholder='TOKEN'
                                        value={this.state.token}
                                        onChange={token => this.setState({ token })}
                                        type='text'
                                    />
                                    <FormGroupUpdate
                                        placeholder='USUARIO'
                                        value={this.state.usuario}
                                        onChange={usuario => this.setState({ usuario })}
                                        type='text'
                                    />
                                    <FormGroupUpdate
                                        placeholder='SENHA'
                                        value={this.state.senha}
                                        onChange={senha => this.setState({ senha })}
                                        type='text'
                                    />
                                    <FormGroupUpdate
                                        placeholder='REGIAO'
                                        value={this.state.regiao}
                                        onChange={regiao => this.setState({ regiao })}
                                        type='text'
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