import React, { Component } from 'react';

import './SolarPlexus.scss'

class SolarPlexus extends Component {
    render() {
        return (
            <div className='solar-plexus-container'>
                <section className='yoga-video'></section>
                <section className='about'>
                    <h1>Solar Plexus Chakra</h1>
                    <h2>Manipura</h2>
                    <p className='description'>description here</p>
                </section>
                <section className='guidance'>
                    <div className='affirmation'></div>
                    <div className='meditation'></div>
                </section>
                <section className='symptoms'>
                    <div className='balanced'></div>
                    <div className='unbalanced'></div>
                </section>
            </div>
        );
    }
}

export default SolarPlexus;