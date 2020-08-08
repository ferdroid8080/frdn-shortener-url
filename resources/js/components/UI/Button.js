import React from 'react'


const button = props => {

    return (
        <button
            className={props.classes.join(' ')}
            disabled={props.disabled}
            onClick={props.clicked} disabled={props.disabled}>
                {props.children}
        </button>
    )
}

export default button
