import React, { Component } from 'react';
import { render } from 'react-dom';

import Layout from './components/UI/Layout'


export default class App extends Component {

    render() {
        return (
            <Layout>
                <p>WIP</p>
            </Layout>
        )
    }
}


if (document.getElementById('app')) {
    render(<App />, document.getElementById('app'));
}
