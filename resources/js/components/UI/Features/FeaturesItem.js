import React from 'react'


const featuresItem = props => {

    return (
        <div className={props.featureClass}>
            <div className="icon"></div>
            <h3>{props.featureTitle}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default featuresItem
