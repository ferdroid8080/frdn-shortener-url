import React, { Fragment } from 'react'

import Toolbar from '../UI/Toolbar'
import Footer from '../UI/Footer'

const layout = props => {

    return (
        <Fragment>
            <div className="container">
                <div className="inner-container">
                    <Toolbar brandName='Frdn link shortener' />
                </div>
                {props.children}
            </div>
            <Footer />
        </Fragment>
    )
}

export default layout
