import React, { Component } from 'react'

import Button from './UI/Button'
import Links from './UI/Links'


class Shortener extends Component {
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        console.log('[ Shortener ] didMounted!')

    }


    render() {
        return (
            <div className='shortener-url-wrapper'>
                <div className="shortener-url">
                    <form action="#" className='form-horizontal'>
                        <div className="form-control">
                            <input type="text" placeholder='Place a description for the shortened link' autoComplete='off' />
                        </div>
                        <Button classes={['button', 'button-primary', 'button-slightly-rounded', 'button-large-form']}>Shorten It!</Button>
                    </form>
                </div>
                <Links links={[
                    { id: 101, original_url: 'http://original.url.long.1234', shorten: 'http://frdn.box/n2j3n4542' },
                    { id: 102, original_url: 'http://original.long.5234', shorten: 'http://frdn.box/4k5j6445' }
                ]} />
            </div>
        )
    }
}

export default Shortener
