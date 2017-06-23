import React, { Component } from 'react';

import ChakraTitle from '../Shared/ChakraTitle';
import Description from '../Shared/Description';

import './Root.scss'

class Root extends Component {
    render() {
         const descriptionArray = [
            'The crown or the seventh chakra is located at the top of the head and is our connection to the Universe.', 
            'In fact, the Seventh Chakra disperses the Universal energy or life force into the six other chakras located below it. In Sanskrit, the', 
            'Crown Chakra is termed as Sahasrara, the ‘thousand fold’ Chakra, since it is pictured as a lotus having a thousand white petals.'
        ]

        return (
            <div className='chakra-container'>
                <section className='home-title'></section>
                <div className='root-gradient'>
                    <Description
                        subtitle='muladhara'
                        title='root chakra'
                        arr={descriptionArray}
                    />
                </div>
            </div>
        );
    }
}

export default Root;