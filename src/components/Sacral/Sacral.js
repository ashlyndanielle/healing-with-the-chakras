import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube';

import './Sacral.scss';

class Sacral extends Component {
    render() {
        return (
            <div className='sacral-container'>
                <section className='yoga-video'>
                    <Youtube youtubeLink='https://www.youtube.com/embed/NUNiK5tIchE'/>
                </section>
                
                <section className='about'>
                    <h1>Sacral Chakra</h1>
                    <h2>Svadhisthana</h2>
                    <p className='description'>description here</p>
                </section>

            </div>
        );
    }
}

export default Sacral;