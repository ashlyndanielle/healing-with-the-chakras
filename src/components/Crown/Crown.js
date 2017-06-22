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
                    <p>The crown or the seventh chakra is located at the top of the head and is our connection to the Universe.<br/>In fact, the Seventh Chakra disperses the Universal energy or life force into the six other chakras located below it. In Sanskrit, the <br/>Crown Chakra is termed as Sahasrara, the ‘thousand fold’ Chakra, since it is pictured as a lotus having a thousand white petals.</p>
                </section>

                <section className='symptoms'>
                    <div className='balanced'>
                        <h1>CLOSED</h1>
                        <ul>
                            <li>depression</li>
                            <li>inability to learn</li>
                            <li>disconnected</li>
                            <li>prejudiced</li>
                            <li>confused</li>
                            <li>feeling incomplete</li>
                        </ul>
                    </div>
                    <div className='unbalanced'>
                        <h1>OPEN</h1>
                        <ul>
                            <li>presence/mindfulness</li>
                            <li>unshakeable trust in our inner guidence</li>
                            <li>mystical oneness</li>
                            <li>peacefulness</li>
                            <li>clarity</li>
                            <li>access to universal consciousness</li>
                        </ul>
                    </div>
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