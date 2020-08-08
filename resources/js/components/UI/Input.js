import React from 'react'

const input = props => {

    return (
        <div className="form-control">
            <input
                type={props.inputType} placeholder={props.placeholder}
                autoComplete='off' name={props.name}
                onChange={props.changed} value={props.value} />
        </div>
    )
}

export default input
