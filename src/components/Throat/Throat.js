import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube';

import './Throat.scss';

class Throat extends Component {
    render() {
        return (
            <div className='throat-container'>
                <section className='yoga-video'>
                    <Youtube youtubeLink='https://www.youtube.com/embed/i02pg2Bl4Ss'/>
                </section>
                <section className='about'>
                    <h1>Throat Chakra</h1>
                    <h2>Vishuddha</h2>
                    <p className='description'>description here</p>
                </section>

            </div>
        );
    }
}

export default Throat;