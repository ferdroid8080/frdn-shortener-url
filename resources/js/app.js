import React, { Component } from 'react';
import { render } from 'react-dom';

import Layout from './components/UI/Layout'
import Button from './components/UI/Button'



export default class App extends Component {

    render() {
        return (
            <Layout>
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
                <div className="advanced-stats">
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
                    <div className="advanced-stats-inner">
                        <div className='header'>
                            <h2 className='text-center'>Advanced Statistics</h2>
                            <h4 className='text-center'>
                                Track how your links are performing across the web with<br />
                                our advanced statistics dashboard.
                            </h4>
                        </div>
                        <div className="insights-blocks">
                            <div className="brand-recognition">
                                <div className="icon"></div>
                                <h3>Brand Recognition</h3>
                                <p>
                                    Boost your brand recognition with each click.
                                    Generic links don't mean a thing. Branded links help instil
                                    confidence in your content.
                                </p>
                            </div>
                            <div className="detailed-records">
                                <div className="icon"></div>
                                <h3>Detailed Records</h3>
                                <p>
                                    Gain insights into who is clicking
                                    your links. Knowing when and where
                                    people engage with your content
                                    helps inform better decisions.
                                </p>
                            </div>
                            <div className="fully-custom">
                                <div className="icon"></div>
                                <h3>Fully Customizable</h3>
                                <p>
                                    Improve brand awareness and
                                    content discoverability through
                                    customizable links, supercharging
                                    audience engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="call-action">
                    <div className='header text-center'>
                        <h3>Boost your links today</h3>
                    </div>
                    <Button classes={['button', 'button-primary', 'button-rounded', 'button-large']}>Get started</Button>
                </div>
            </Layout>
        )
    }
}


if (document.getElementById('app')) {
    render(<App />, document.getElementById('app'));
}
