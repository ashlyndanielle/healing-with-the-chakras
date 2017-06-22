import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube';

import './SolarPlexus.scss'

class SolarPlexus extends Component {
    render() {
        return (
            <div className='solar-plexus-container'>
                <section className='yoga-video'>
                    <Youtube youtubeLink='https://www.youtube.com/embed/gzpQsi1w4vs'/>
                </section>
                
                <section className='about'>
                    <h1>Solar Plexus Chakra</h1>
                    <h2>Manipura</h2>
                    <p className='description'>description here</p>
                </section>

            </div>
        );
    }
}

export default SolarPlexus;