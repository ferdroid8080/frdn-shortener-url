import React, { createRef } from 'react'
import copy from 'copy-to-clipboard'

import Button from '../UI/Button'


class Links extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            linkCopied: {
                id: null,
                link: null
            }
        }

    }


    copiedLinkHandler(value, id) {
        const updatedLinkState = {
            ...this.state.linkCopied,
            id: id,
            link: value
        }
        this.copyToClipboard(value)
        this.setState({ linkCopied: updatedLinkState })
    }

    copyToClipboard(value) {
        copy(value, {
            format: 'text/plain',
            onCopy: (data) => {
                console.log('copied link: ', value)
            }
        })
    }

    render() {
        let copied = { ...this.state.linkCopied }

        return (
            <div className='shorten-links'>
                <ul className="links">
                    {
                        this.props.links
                            ? this.props.links.map(item => {

                                let btnStyles = ['button', 'button-primary', 'button-slightly-rounded']
                                if (copied.id === item.id) {
                                    btnStyles.push('button-active')
                                }

                                return (
                                    <li key={item.id}>
                                        <div className="original-link">
                                            <p>{item.original_url}</p>
                                        </div>
                                        <div className="shorten">
                                            <p>{item.shorten}</p>
                                            <Button classes={btnStyles} clicked={() => this.copiedLinkHandler(item.shorten, item.id)} disabled={copied.id === item.id}>
                                                { copied.id === item.id ? 'Copied!' : 'Copy' }
                                            </Button>
                                        </div>
                                    </li>
                                )
                            })
                            : null
                    }
                </ul>
            </div>
        )
    }
}

export default Links
