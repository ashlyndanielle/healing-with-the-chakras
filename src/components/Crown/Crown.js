import React, { Component } from 'react';

import './Crown.css';

class Crown extends Component {
    render() {
        return (
            <div>
                <header>
                    <h1>Crown Chakra</h1>
                    <p className='description'>description here</p>
                </header>
                <section className='nutrition'></section>
                <section className='yoga-poses'></section>
                <section className='affirmation'></section>
                <section className='meditation'></section>
            </div>
        );
    }
}

export default Crown;