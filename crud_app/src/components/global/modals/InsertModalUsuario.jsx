import FormGroup from '../FormGroup';
import $ from 'jquery'

import React, { Component } from 'react'
import ModalFormBody from '../ModalFormBody';
import { ContextConsumer } from '../../../config/context/Context';

export default function InsertModalUsuario(props) {
    return (
        <ContextConsumer>
            {
                value => {
                    return (
                        <ModalFormBody
                            id="insertFormUsuario"
                            title={'Inserir usuario'}
                            // large="modal-lg"
                            onClick={() => value.validaUsuario({
                                nome: $('#nome').val(),
                                login: $('#login').val(),
                                senha: $('#senhaForm').val(),
                                confirmaSenha: $('#confirmaSenhaForm').val()
                            })}>
                            <div className="row">
                                <form method="POST">
                                    <div className="row">
                                        <FormGroup
                                            id="nome"
                                            placeholder="NOME"
                                            label="*Informe o Nome"
                                            type="text"
                                        />
                                        <FormGroup
                                            id="login"
                                            placeholder="LOGIN"
                                            label="*Informe o Login"
                                            type="email"
                                        />
                                        <FormGroup
                                            id="senhaForm"
                                            placeholder="SENHA"
                                            label="*Informe a Senha"
                                            type="password"
                                        />
                                        <FormGroup
                                            id="confirmaSenhaForm"
                                            placeholder="CONFIRMAR SENHA"
                                            label="*Confirmar a Senha"
                                            type="password"
                                        />
                                    </div>
                                </form>
                            </div>
                        </ModalFormBody>
                    )
                }
            }
        </ContextConsumer>
    )
}