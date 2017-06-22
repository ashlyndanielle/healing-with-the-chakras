import React, { Component } from 'react';

import Youtube from '../Youtube/Youtube';

class Crown extends Component {
    render() {

    

        return (
            <div className='crown-container'>
                <section className='yoga-video'>
                    <Youtube youtubeLink="https://www.youtube.com/embed/82mnPCsZzEQ"/>
                </section>

                <section className='about'>
                    <h1>Crown Chakra</h1>
                    <h2>Sahasrara</h2>
                    <p className='description'>description here</p>
                </section>
                
                <section>

                </section>
   
            </div>
        );
    }
}

export default Crown;