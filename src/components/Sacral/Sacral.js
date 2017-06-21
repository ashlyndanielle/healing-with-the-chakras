import React, { Component } from 'react';

import './Sacral.scss';

class Sacral extends Component {
    render() {
        return (
            <div className='sacral-container'>
                <section className='yoga-video'></section>
                <section className='about'>
                    <h1>Sacral Chakra</h1>
                    <h2>Svadhishthana</h2>
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

export default Sacral;