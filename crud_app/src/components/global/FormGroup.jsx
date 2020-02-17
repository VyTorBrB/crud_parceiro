import React from 'react'

export default function FormGroup(props) {
    return (
        <div className={props.colsize ? props.colsize : "col-sm-12 col-md-6 col-lg-6"}>
            <div className="form-group">
                <label htmlFor={props.id}>{props.label}: </label>
                <input
                    type={props.type}
                    className="form-control"
                    id={props.id}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}