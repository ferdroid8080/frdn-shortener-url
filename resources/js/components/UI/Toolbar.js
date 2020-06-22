import React from 'react'

import logo from '../../../images/logo.svg'


const toolbar = props => {

    return (
        <div className='toolbar'>
            <div className="navigation">
                <div className="header">
                    <h2>
                        <img src={logo} alt={props.brandName} />
                    </h2>
                </div>
                <div className="pages">
                    <ul>
                        <li><a href="#">New Link</a></li>
                    </ul>
                </div>
            </div>
            <div className="actions">
                <ul>
                    <li><button className='button'>Login</button></li>
                    <li><button className='button button-primary button-rounded'>Sign Up</button></li>
                </ul>
            </div>
        </div>
    )
}

export default toolbar
