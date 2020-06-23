import React, { Component } from 'react'

import Button from './UI/Button'


class Shortener extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log('[ Shortener ] didMounted!')

    }


    render() {
        return (
            <div className="shortener-url">
                <form action="#" className='form-horizontal'>
                    <div className="form-control">
                        <input type="text" placeholder='Shorten a link here...' autoComplete='off' />
                    </div>
                    <div className="form-control">
                        <input type="text" placeholder='Place a description for the shortened link' autoComplete='off' />
                    </div>
                    <Button classes={['button', 'button-primary', 'button-slightly-rounded', 'button-large-form']}>Shorten It!</Button>
                </form>
            </div>
        )
    }
}

export default Shortener
