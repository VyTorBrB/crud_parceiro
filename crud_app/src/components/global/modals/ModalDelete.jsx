import React, { Component } from 'react'
import $ from 'jquery'
import ModalFormBody from '../ModalFormBody';

class ModalDelete extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: props.id ? props.id : '',
            nome: props.nome ? props.nome : '',
            idGrupo: props.idGrupo ? props.idGrupo : ''
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState(() => {
            return {
                id: nextProps.id ? nextProps.id : '',
                nome: nextProps.nome ? nextProps.nome : '',
                idGrupo: nextProps.idGrupo ? nextProps.idGrupo : ''
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

    deleteHandler = () => {
        this.props.deleteDetails(this.state)
    }

    render() {
        return (
            <ModalFormBody
                id="modalDelete"
                label="Deletar"
                typeDelete={true}
                title={this.props.title ? this.props.title : "Deletar Registro"}
                onClick={this.deleteHandler} >
                <div
                    className="row justify-content-center">
                    <h1><i className="fas fa-minus-circle fa-3x" style={{ color: 'red' }} /></h1>
                </div>
                <div className="row justify-content-center my-2">
                    <input disabled id="idDeleteModal" placeholder="ID" value={this.state.id} onChange={e => this.idHandler($('#idDeleteModal').val())} />
                </div>
                <div className="row justify-content-center">
                    <input disabled id="nomeDeleteModal" placeholder="USUARIO" value={this.state.nome} onChange={e => this.nomeHandler($('#nomeDeleteModal').val())} />
                </div>
                <div className="row justify-content-center my-3">
                    <span><strong>{this.props.deleteLabel ? this.props.deleteLabel : 'Deletar esse Registro?'}</strong></span>
                </div>
                {
                    this.props.isAgente ? (
                        <div className="row justify-content-center my-2 text-center text-dark text-break">
                            <span style={{ maxWidth: '220px' }}>
                                (!) Não recomendado caso o agente tenha contatos pessoais na agenda
                            </span>
                        </div>
                    ) : ''
                }
            </ModalFormBody>
        )
    }
}
export default ModalDelete