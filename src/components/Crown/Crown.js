import React, { Component } from 'react';

import LotusCrown from '../../Images/Lotus-Line-Art-1.svg';
import Youtube from '../Youtube/Youtube';
import ChakraTitle from '../Shared/ChakraTitle';

class Crown extends Component {
    render() {

    

        return (
            <div className='crown-container'>

                <section className='home-title'>
                </section>

                <section className='description'>
                    
                <ChakraTitle title="Crown Chakra"/>

                    <h2>sahasrara</h2>
                    <p>The crown or the seventh chakra is located at the top of the head and is our connection to the Universe.<br/>In fact, the Seventh Chakra disperses the Universal energy or life force into the six other chakras located below it. In Sanskrit, the Crown Chakra is termed as Sahasrara,<br/> the ‘thousand fold’ Chakra, since it is pictured as a lotus having a thousand white petals.</p>
                </section>

                <section className='symptoms'>
                    <div>balanced</div>
                    <div>unbalanced</div>
                </section>
                
                <section className='guidance'>
                    <div>affirmation</div>
                    <div>meditation</div>
                </section>

   
                <section className='yoga-video'>
                    <Youtube youtubeLink="https://www.youtube.com/embed/82mnPCsZzEQ"/>
                </section>

            </div>
        );
    }
}

export default Crown;