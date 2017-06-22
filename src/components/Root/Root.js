import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube';

import './Root.scss'

class Root extends Component {
    render() {
        return (
            <div className='root-container'>
                <section className='yoga-video'>
                    <Youtube youtubeLink='https://www.youtube.com/embed/Vmpje8KHrhY'/>
                </section>
                
                <section className='about'>
                    <h1>Root Chakra</h1>
                    <h2>Muladhara</h2>
                    <p className='description'>description here</p>
                </section>

            </div>
        );
    }
}

export default Root;