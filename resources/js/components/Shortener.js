import React, { Component } from 'react'

import Input from './UI/Input'
import Button from './UI/Button'
import Links from './UI/Links'


class Shortener extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                orig_url: '',
                description: ''
            },
            formIsLoading: false,
            formError: null,
            formSuccessMsg: ''
        }

    }

    componentDidMount() {
        console.log('[ Shortener ] didMounted!')

    }

    inputChangedHandler(ev) {
        this.setState({
            form: {
                ...this.state.form,
                [ev.target.name]: ev.target.value
            }
        })
    }

    async formSubmittedHandler(ev) {
        ev.preventDefault()

        if (this.state.formIsLoading) {
            return
        }

        this.setState({ formIsLoading: true, formError: null })

        try {
            const responseCreate = await window.axios.post('/new/link', this.state.form)
            const data = responseCreate.data

            let formUpdated = { ...this.state.form }

            if (data.success) {
                Object.keys(formUpdated).map(fKey => {
                    return formUpdated[fKey] = ''
                })
                console.log(formUpdated)
            }

            this.setState({
                formIsLoading: false,
                formError: !data.success ? { message: data.message } : null,
                formSuccessMsg: data.success ? data.message : '',
                form: formUpdated
            })

        } catch(err) {
            const error = err.response.data
            console.log(error)
            this.setState({ formIsLoading: false, formError: error })
        }

    }


    render() {
        return (
            <div className='shortener-url-wrapper'>
                <div className="shortener-url">
                    <form onSubmit={this.formSubmittedHandler.bind(this)} className='form-horizontal'>
                        <Input
                            inputType='text' placeholder='Type a link you want to get a shorten url'
                            name='orig_url' changed={this.inputChangedHandler.bind(this)}
                            value={this.state.form.orig_url} />
                        <Input
                            inputType='text'
                            placeholder='Place a description for the shortened link'
                            name='description' changed={this.inputChangedHandler.bind(this)}
                            value={this.state.form.description} />
                        <Button classes={['button', 'button-primary', 'button-slightly-rounded', 'button-large-form']} disabled={this.state.formIsLoading}>Shorten It!</Button>
                    </form>
                </div>
                {/* <Links error={this.state.formError} links={[
                    { id: 101, original_url: 'http://original.url.long.1234', shorten: 'http://frdn.box/n2j3n4542' },
                    { id: 102, original_url: 'http://original.long.5234', shorten: 'http://frdn.box/4k5j6445' }
                ]} /> */}
                <Links error={this.state.formError} success={this.state.formSuccessMsg} links={null} />
            </div>
        )
    }
}

export default Shortener
