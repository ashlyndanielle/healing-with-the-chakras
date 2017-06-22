import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube';

import './Heart.scss';

class Heart extends Component {

    render() {
        return (
            <div className='heart-container'>

                <section className='yoga-video'>
                    <Youtube youtubeLink="https://www.youtube.com/embed/TMq0Bt-G7wM"/>
                </section>
                
                <section className='about'>
                    <h1>Heart Chakra</h1>
                    <h2>Anahata</h2>
                    <p className='description'>description here</p>
                </section>


            </div>
        );
    }
}

export default Heart;