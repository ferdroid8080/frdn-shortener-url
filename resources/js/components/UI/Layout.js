import React from 'react'

import logo from '../../../images/logo.svg'
// import illustration_working from '../../../images/illustration-working.svg'


const layout = props => {

    return (
        <div className='container'>
            <div className='toolbar'>
                <div className="navigation">
                    <div className="header">
                        <h2>
                            <img src={logo} alt="BrandName" />
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
            <div className="jumbotron">
                <div className="jumbotron-header">
                    <header>
                        <h1>More than just shorter links</h1>
                        <h4>
                            Build your brand's reconignition and get detailed
                            insights on how your links are performing.
                        </h4>
                    </header>
                </div>
                <div className="illustration"></div>
            </div>
            {props.children}
        </div>
    )
}

export default layout
