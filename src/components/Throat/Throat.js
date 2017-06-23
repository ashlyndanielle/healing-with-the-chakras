import React, { Component } from 'react';

import Description from '../Shared/Description';
import './Throat.scss';

class Throat extends Component {
    render() {

        const descriptionArray = [
            'The crown or the seventh chakra is located at the top of the head and is our connection to the Universe.', 
            'In fact, the Seventh Chakra disperses the Universal energy or life force into the six other chakras located below it. In Sanskrit, the', 
            'Crown Chakra is termed as Sahasrara, the ‘thousand fold’ Chakra, since it is pictured as a lotus having a thousand white petals.'
        ]

        return (
            <div className='chakra-container'>
                <section className='home-title'></section>
                <div className='throat-gradient'>
                    <Description 
                        subtitle='vishuddha'
                        title='throat chakra'
                        arr={ descriptionArray }
                    />
                </div>

            </div>
        );
    }
}

export default Throat;