import React from 'react'
import { Link } from 'react-router-dom'
export default function TableButtons(props) {
    return (
        <div className="btn-group btn-group-sm" role="group">
            {
                props.linkTo ?
                    <Link to={props.linkTo}>
                        <button href={props.linkTo ? props.linkTo : ''} type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-placement="bottom" title="Editar" data-target={props.dataTargetEdit} onClick={
                            props.onClickEdit
                        }>
                            <i className="fas fa-edit" />
                        </button>
                    </Link>
                    :
                    <button href={props.linkTo ? props.linkTo : ''} type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-placement="bottom" title="Editar" data-target={props.dataTargetEdit} onClick={
                        props.onClickEdit
                    }>
                        <i className="fas fa-edit" />
                    </button>
            }

            <button type="button" className="btn btn-danger btn-sm" data-toggle="modal" data-placement="bottom" title="Deletar" data-target={props.dataTargetDelete} onClick={
                props.onClickDelete
            }>
                <i className="fas fa-trash" />
            </button>
        </div>
    )
}