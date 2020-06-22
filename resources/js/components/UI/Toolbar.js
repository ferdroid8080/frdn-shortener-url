import React from 'react'

import Button from '../UI/Button'


const toolbar = props => {

    return (
        <div className='toolbar'>
            <div className="navigation">
                <div className="header">
                    <div className="logo"></div>
                </div>
                <div className="pages">
                    <ul>
                        <li><a href="#">New Link</a></li>
                    </ul>
                </div>
            </div>
            <div className="actions">
                <ul>
                    <li><Button classes={['button']}>Login</Button></li>
                    <li><Button classes={['button', 'button-primary', 'button-rounded']}>Sign up</Button></li>
                </ul>
            </div>
        </div>
    )
}

export default toolbar
