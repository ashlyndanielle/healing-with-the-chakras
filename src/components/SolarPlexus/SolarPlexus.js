import React, { Component } from 'react';

import Symptoms from '../Shared/Symptoms';
import Description from '../Shared/Description';


class SolarPlexus extends Component {
    render() {

        const descriptionArray = [
            'The crown or the seventh chakra is located at the top of the head and is our connection to the Universe.', 
            'In fact, the Seventh Chakra disperses the Universal energy or life force into the six other chakras located below it. In Sanskrit, the', 
            'Crown Chakra is termed as Sahasrara, the ‘thousand fold’ Chakra, since it is pictured as a lotus having a thousand white petals.'
        ]
        const closedList = ['depression', 'inability to learn', 'disconnected', 'prejudiced', 'confused', 'feeling incomplete'];
        const openedList = ['presence/mindfulness', 'unshakeable trust in our inner guidence', 'mystical oneness', 'peacefulness', 'clarity', 'access to universal consciousness'];

        return (
            <div className='chakra-container'>
                <section className='home-title'></section>
                <div className='solar-gradient'>
                    <Description 
                        subtitle='manipura'
                        title='solar plexus chakra'
                        arr={ descriptionArray }
                    />
                </div>

                <div className='solar-symptoms'>
                    <Symptoms 
                        title='solar plexus' 
                        list1={closedList} 
                        list2={openedList} 
                    />
                </div>
            </div>
        );
    }
}

export default SolarPlexus;