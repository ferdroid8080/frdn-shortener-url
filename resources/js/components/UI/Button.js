import React from 'react'


const button = props => {

    return (
        <button className={props.classes.join(' ')}>{props.children}</button>
    )
}

export default button
