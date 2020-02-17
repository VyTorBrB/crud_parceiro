import React from 'react'

/**
 * 
 * @typedef {Object} Props 
 * @property {String} id the modal id
 * @property {'modal-lg'|'modal-xl'} [large = ''] whether if the modal's size is lg or std
 * @property {String} title the modal's title
 * @property {JSX.Element} [children]
 * @property {Boolean} [hideSave]
 * @property {Boolean} [typeDelete]
 * @property {Function} onClick
 * @property {String} [label] the save button label's
 * @property {Boolean} [fluid]
 * @property {'right'|'left'|'bottom'|'top'} [direction]
 * 
 * @param {Props} props
 */
export default function ModalFormBody(props) {
    return (
        <div
            className="modal fade"
            id={props.id}
            // tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div
                className={`modal-dialog ${props.large} ${props.fluid ? 'modal-full-height' : ''} ${props.direction} `}
                role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5
                            className="modal-title"
                            id="exampleModalLabel">{props.title}
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal">Cancelar
                        </button>

                        {
                            props.hideSave ? '' : (
                                <button
                                    type="button"
                                    className={props.typeDelete ? "btn btn-danger" : "btn btn-primary"}
                                    data-dismiss="modal"
                                    onClick={() => props.onClick()}>{props.label ? props.label : 'Salvar Alterações'}
                                </button>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}