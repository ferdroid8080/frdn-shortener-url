import React, { Fragment } from 'react'

import Toolbar from '../UI/Toolbar'


const layout = props => {

    return (
        <Fragment>
            <div className="container">
                <div className="inner-container">
                    <Toolbar brandName='Frdn link shortener' />
                </div>
                {props.children}
            </div>
            <div className="footer-info">
                <div className="header">
                    <div className="logo"></div>
                </div>
                <div className="footer-links"></div>
                <div className="footer-social-links"></div>
            </div>
        </Fragment>
    )
}

export default layout
