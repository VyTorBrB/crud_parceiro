import React, { Component } from 'react'
import Content from './Content'
import ReactTableSetResults from './ReactTableSetResults'
import { ContextConsumer, Context } from '../../config/context/Context'
import TableButtons from './TableButtons'
import InsertModalUsuario from './modals/InsertModalUsuario'
import ModalUsuario from './modals/ModalUsuario'
import ModalDelete from './modals/ModalDelete'

export default class Usuarios extends Component {
    componentWillMount() {
        const { getUsers } = this.context

        // getUsers()
    }

    state = {
        modalItemData: {},
        modalItemIndex: ''
    }

    getModalItem = (id, array) => {
        // const tempUsuarios = this.state.usuarios
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
                        const { users, getUsers, deletarUsuario } = value
                        return (
                            <Content>
                                <InsertModalUsuario />

                                <ModalUsuario
                                    id={this.state.modalItemData.id}
                                    nome={this.state.modalItemData.nome}
                                    login={this.state.modalItemData.login}
                                />

                                <ModalDelete
                                    id={this.state.modalItemData.id}
                                    nome={this.state.modalItemData.nome}
                                    deleteDetails={deletarUsuario}
                                />

                                <ReactTableSetResults
                                    onClickAtualiza={getUsers}
                                    dataTargetInsert='#insertFormUsuario'
                                    data={users}
                                    columns={[
                                        {
                                            Heder: 'ID',
                                            accessor: 'id',
                                            maxWidth: 100
                                        },
                                        {
                                            Header: 'Nome',
                                            accessor: 'nome',
                                            filterable: true
                                        },
                                        {
                                            Header: 'Login',
                                            accessor: 'login',
                                            filterable: true
                                        },
                                        {
                                            Header: "Ações",
                                            Cell: props => {
                                                return (
                                                    <TableButtons
                                                        dataTargetEdit="#modalUsuario"
                                                        dataTargetDelete="#modalDelete"
                                                        onClickDelete={() => {
                                                            this.getModalItem(props.original.id, users)
                                                        }}
                                                        onClickEdit={() => {
                                                            this.getModalItem(props.original.id, users)
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
Usuarios.contextType = Context