import React, { Component } from 'react';

import './LandingPage.scss';

class LandingPage extends Component {
    render() {
        return (
            <div className='landing-container'>
                <h1>The Seven Wheels of Energy</h1>
                <section className='video'></section>
                <section className='description'></section>
                <section className='dummy'></section>
            </div>
        );
    }
}

export default LandingPage;