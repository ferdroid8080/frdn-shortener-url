import React from 'react'

import Toolbar from '../UI/Toolbar'
// import illustration_working from '../../../images/illustration-working.svg'


const layout = props => {

    return (
        <div className='container'>
            <Toolbar brandName='Frdn link shortener' />
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
