import React, { Component } from 'react';

import './ThirdEye.scss';

class ThirdEye extends Component {
    render() {
        return (
            <div>
                <section className='yoga-video'></section>
                <section className='about'>
                    <h1>Third Eye Chakra</h1>
                    <h2>Anja</h2>
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

export default ThirdEye;