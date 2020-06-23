import React from 'react'

import Button from './UI/Button'

const jumbotron = props => {

    return (
        <div className="jumbotron illustration">
            <div className="jumbotron-left-space"></div>
            <div className="jumbotron-header">
                <header>
                    <h1>More than just shorter links</h1>
                    <h4>
                        Build your brand's reconignition and get detailed
                        insights on how your links are performing.
                    </h4>
                    <Button classes={['button', 'button-primary', 'button-rounded', 'button-large']}>Get started</Button>
                </header>
            </div>
            <div className="illustration-block"></div>
        </div>
    )
}

export default jumbotron
