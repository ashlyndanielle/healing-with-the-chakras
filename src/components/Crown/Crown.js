import React, { Component } from 'react';

import LotusCrown from '../../Images/Lotus-Line-Art-1.svg';
import Youtube from '../Youtube/Youtube';

class Crown extends Component {
    render() {

    

        return (
            <div className='crown-container'>

                <section className='about'>
                    <div className='about-words'>
                        <h1>Crown Chakra</h1>
                    </div>
                    {/*<img src={LotusCrown}/>*/}
                </section>

                <section className='description'>
                    <p>description</p>
                </section>

                <section className='guidance'>
                    <div>affirmation</div>
                    <div>meditation</div>
                </section>

                <section className='symptoms'>
                    <div>balanced</div>
                    <div>unbalanced</div>
                </section>
   
                <section className='yoga-video'>
                    <Youtube youtubeLink="https://www.youtube.com/embed/82mnPCsZzEQ"/>
                </section>

            </div>
        );
    }
}

export default Crown;