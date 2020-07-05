import React, { Component } from 'react';
import { render } from 'react-dom';

import Layout from './components/UI/Layout'

import Jumbotron from './components/Jumbotron'
import Shortener from './components/Shortener'

import Features from './components/UI/Features/Features'
import FeaturesItem from './components/UI/Features/FeaturesItem'

import Button from './components/UI/Button'



const FEATURES_LIST = [
    {id: 100, className: 'brand-recognition', title: 'Brand Recognition', content: 'Boost your brand recognition with each click. Generic links don\'t mean a thing. Branded links help instil confidence in your content.'},
    {id: 110, className: 'detailed-records', title: 'Detailed Records', content: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'},
    {id: 120, className: 'fully-custom', title: 'Fully Customizable', content: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'}
]


export default class App extends Component {

    render() {
        return (
            <Layout>
                <Jumbotron />
                <div className="advanced-stats">
                    <Shortener />
                    <div className="advanced-stats-inner">
                        <div className='header'>
                            <h2 className='text-center'>Advanced Statistics</h2>
                            <h4 className='text-center'>
                                Track how your links are performing across the web with<br />
                                our advanced statistics dashboard.
                            </h4>
                        </div>
                        <Features>
                            {
                                FEATURES_LIST.map(i => (
                                    <FeaturesItem key={i.id} featureClass={i.className} featureTitle={i.title}>
                                        {i.content}
                                    </FeaturesItem>
                                ))
                            }
                        </Features>
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
