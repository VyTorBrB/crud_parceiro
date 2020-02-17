import React, { Component } from 'react'
import ReactTable from 'react-table'
import { Link } from 'react-router-dom'
import 'react-table/react-table.css'

/**
* @extends {Component}
*
* @typedef {Object<string, any>} Props props passadas para o componente ReactTableSetResults 
* @property {Function} [onClickAtualiza] funcao a ser executada para atualizar a lista
* @property {String} [linkTo] verifica se o botao insert - success deve ser direcionado para outro componente
* @property {Function | null} [onClickInsert] funcao a ser executado ao clicar no botao (caso for um redirecionamento esse item `e opcional) 
* @property {Array} data o retorno do backend
* @property {Object<string, any>[]} columns array de colunas
* @property {Boolean} [pagination] verifica se quer a apresentacao da paginacao na tabela
* @property {Boolean} [hideInsert = false] se deseja esconder o botao de inserir
* @property {String} [dataTargetInsert] id do modal de insercao
* @property {number} [defaultPageSize = 5] default value 5
*/
export default class ReactTableSetResults extends Component {
    /**
     * @param {Props} props
     */
    constructor(props) {
        super(props)

        this.props = props
    }
    render() {
        const texts = {
            previousText: 'Anterior',
            nextText: 'Proximo',
            loadingText: 'Carregando...',
            noDataText: 'Nenhum Registro Encontrado',
            pageText: 'Pagina',
            ofText: 'de',
            rowsText: 'Registros'
        }
        return (
            <div
                // css={{
                //     width: "100vw",
                //     overflowX: "scroll"
                // }}
                className="mt-3 table-container">
                <button className="btn btn-outline-primary mb-2" onClick={
                    this.props.onClickAtualiza
                } >Atualizar Registros</button>

                {
                    this.props.linkTo ?
                        <Link to={this.props.linkTo}>
                            <button
                                className="btn btn-outline-success mb-2 ml-2"
                                data-toggle="modal"
                                data-target={this.props.dataTargetInsert}
                                onClick={
                                    this.props.onClickInsert
                                }>
                                <i className="fas fa-plus" /> Inserir
                            </button>
                        </Link>
                        :
                        <button
                            hidden={this.props.hideInsert}
                            className="btn btn-outline-success mb-2 ml-2"
                            data-toggle="modal"
                            data-target={this.props.dataTargetInsert}
                            onClick={
                                this.props.onClickInsert
                            } >
                            <i className="fas fa-plus" /> Inserir
                        </button>
                }

                <ReactTable
                    className="-highlight"
                    data={this.props.data && this.props.data.length ? this.props.data : []}
                    columns={this.props.columns}
                    style={{
                        textAlign: "center",
                        borderRadius: '0.5rem',
                        // backgroundColor: 'lightgray'
                    }}
                    defaultPageSize={this.props.defaultPageSize ? this.props.defaultPageSize : 5}
                    // loading={this.props.data && this.props.data.length > 0 ? false : true}
                    showPagination={this.props.pagination ? this.props.pagination : true}
                    {...texts}
                />
            </div>
        )
    }
}