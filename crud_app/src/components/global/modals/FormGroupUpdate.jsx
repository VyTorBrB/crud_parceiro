import React from 'react'
import InputMask from 'react-input-mask'
/**
 * @typedef {Object<String,any>} Props
 * @property {String} [modalUpdateRow]
 * @property {Boolean} [hidden]
 * @property {String} [colsize]
 * @property {String} [id]
 * @property {String} [label]
 * @property {any} value
 * @property {Function} onChange
 * @property {String} type
 * @property {String} placeholder
 * @property {Boolean} [disabled]
 * @property {Number} [min] min value
 * @property {Number} [max] max value
 * @property {Boolean} [tooltip] tooltip on input field will display the content of the placeholder
 * @property {String} [mask]
 * 
 * @param {Props} props 
 */
export default function FormGroupUpdate(props) {
    return (
        <div
            id={props.modalUpdateRow}
            hidden={props.hidden}
            className={props.colsize ? props.colsize : "col-sm-12 col-md-6 col-lg-6"}>
            <div className="form-group">
                <label htmlFor={props.id}>{props.label ? `${props.label}:` : ''} </label>
                {
                    props.mask ? (
                        <InputMask
                            mask={props.mask}
                            title={props.tooltip ? props.placeholder : ''}
                            value={props.value}
                            onChange={e => {
                                return props.onChange(e.target.value)
                            }}
                            disabled={props.disabled}
                        />
                    ) : (
                            <input
                                title={props.tooltip ? props.placeholder : ''}
                                value={props.value}
                                onChange={e => {
                                    return props.onChange(e.target.value)
                                }}
                                type={props.type}
                                className="form-control"
                                id={props.id}
                                placeholder={props.placeholder}
                                disabled={props.disabled}
                                min={props.min}
                                max={props.max}
                            />
                        )
                }
            </div>
        </div>
    )
}