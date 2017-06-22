import React, { Component } from 'react';
import Youtube from '../Youtube/Youtube';

import './ThirdEye.scss';

class ThirdEye extends Component {
    render() {
        return (
            <div className='third-eye-container'>
                <section className='yoga-video'>
                    <Youtube youtubeLink='https://www.youtube.com/embed/Wvmd9bHnnjs'/>
                </section>
                
                <section className='about'>
                    <h1>Third Eye Chakra</h1>
                    <h2>Anja</h2>
                    <p className='description'>description here</p>
                </section>

            </div>
        );
    }
}

export default ThirdEye;