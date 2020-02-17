import React, { Component } from 'react'
import Content from './Content'
import ReactTableSetResults from './ReactTableSetResults'
import { ContextConsumer, Context } from '../../config/context/Context'
import TableButtons from './TableButtons'
import ModalDelete from './modals/ModalDelete'
import InsertModalParceiro from './modals/InsertModalParceiro'
import ModalParceiro from './modals/ModalParceiro'

export default class Parceiros extends Component {
    componentWillMount() {
        const { getUsers } = this.context

        // getUsers()
    }

    state = {
        modalItemData: {},
        modalItemIndex: ''
    }

    getModalItem = (id, array) => {
        // const tempParceiros = this.state.Parceiros
        const item = array.find(obj => obj.id === id)
        let index = array.indexOf(item)

        this.setState(() => {
            return {
                modalItemData: array[index],
                modalItemIndex: index
            }
        })
    }

    render() {
        return (
            <ContextConsumer>
                {
                    value => {
                        const { parceiros, getParceiros, deletarParceiro } = value
                        return (
                            <Content>
                                <InsertModalParceiro />

                                <ModalParceiro
                                    id={this.state.modalItemData.id}
                                    promotora={this.state.modalItemData.promotora}
                                    cpf={this.state.modalItemData.cpf}
                                    codigo={this.state.modalItemData.codigo}
                                    token={this.state.modalItemData.token}
                                    usuario={this.state.modalItemData.usuario}
                                    senha={this.state.modalItemData.senha}
                                    regiao={this.state.modalItemData.regiao}
                                />

                                <ModalDelete
                                    id={this.state.modalItemData.id}
                                    nome={this.state.modalItemData.usuario}
                                    deleteDetails={deletarParceiro}
                                />

                                <ReactTableSetResults
                                    onClickAtualiza={getParceiros}
                                    dataTargetInsert='#insertParceiro'
                                    data={parceiros}
                                    columns={[
                                        {
                                            Heder: 'ID',
                                            accessor: 'id',
                                            maxWidth: 100
                                        },
                                        {
                                            Header: 'Promotora',
                                            accessor: 'promotora',
                                            filterable: true
                                        },
                                        {
                                            Header: 'Cpf',
                                            accessor: 'cpf',
                                            filterable: true
                                        },
                                        {
                                            Header: 'Codigo',
                                            accessor: 'codigo',
                                            filterable: true
                                        },
                                        {
                                            Header: 'Token',
                                            accessor: 'token',
                                            filterable: true
                                        },
                                        {
                                            Header: 'User',
                                            accessor: 'usuario',
                                            filterable: true
                                        },
                                        {
                                            Header: 'Senha',
                                            accessor: 'senha',
                                            filterable: true
                                        },
                                        {
                                            Header: 'Regiao',
                                            accessor: 'regiao',
                                            filterable: true
                                        },
                                        {
                                            Header: "Ações",
                                            Cell: props => {
                                                return (
                                                    <TableButtons
                                                        dataTargetEdit="#modalParceiros"
                                                        dataTargetDelete="#modalDelete"
                                                        onClickDelete={() => {
                                                            this.getModalItem(props.original.id, parceiros)
                                                        }}
                                                        onClickEdit={() => {
                                                            this.getModalItem(props.original.id, parceiros)
                                                        }}
                                                    />
                                                )
                                            },
                                            sortable: false,
                                            maxWidth: 120
                                        }
                                    ]}
                                />
                            </Content>
                        )
                    }
                }
            </ContextConsumer>
        )
    }
}
Parceiros.contextType = Context