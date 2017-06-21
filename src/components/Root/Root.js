import React, { Component } from 'react';

import './Root.css'

class Root extends Component {
    render() {
        return (
            <div>
                <section className='yoga-video'></section>
                <section className='about'>
                    <h1>Root Chakra</h1>
                    <h2>Muladhara</h2>
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

export default Root;