import React, { Component } from 'react';

import Symptoms from '../Shared/Symptoms';
import Description from '../Shared/Description';
import Guidance from '../Shared/Guidance';
import MainInfo from '../Shared/MainInfo';


class Throat extends Component {
    render() {

        const descriptionArray = [
            'The crown or the seventh chakra is located at the top of the head and is our connection to the Universe.', 
            'In fact, the Seventh Chakra disperses the Universal energy or life force into the six other chakras located below it. In Sanskrit, the', 
            'Crown Chakra is termed as Sahasrara, the ‘thousand fold’ Chakra, since it is pictured as a lotus having a thousand white petals.'
        ]

        const closedList = ['depression', 'inability to learn', 'disconnected', 'prejudiced', 'confused', 'feeling incomplete'];
        const openedList = ['presence/mindfulness', 'unshakeable trust in our inner guidence', 'mystical oneness', 'peacefulness', 'clarity', 'access to universal consciousness'];

        const medArr = [
            'Sit comfortably with your legs crossed and your back straight. Rest your hands in your lap, palms upward, with your left hand on top. This is the mudra for receiving energy. Close your eyes and let your breathing become slow and even.',
            'Visualize a thousand-petalled lotus at the crown of your head. Imagine its petals gently opening to reveal an intense light. Let this divine light flow down into you through your crown chakra.  Repeat your crown chakra affirmation.',
            'Feel the light spiraling down your body. Enjoy the warm glow as it saturates your entire being. Let every cell be permeated by light and inspiration, and every part of your consciousness become illuminated.',
            'Focus your senses on the intensity of the light so that you not only see it, but hear, smell, taste, and touch it. Think of the light as a manifestation of your higher self, representing the peace that lies beyond understanding.',
            'Feel a pure channel for the light: allow yourself to be at one with it. In this state of oneness, intuitive thoughts and inspirations may enter your consciousness. Be thankful for this guidance.  Take a breath and open your eyes.'
        ];

        return (
            <div className='chakra-container'>
                <section className='home-title'>
                    <MainInfo main='Throat' />
                </section>
                <div className='throat-gradient'>
                    <Description 
                        subtitle='vishuddha'
                        title='throat chakra'
                        arr={ descriptionArray }
                    />
                </div>

                <div className='throat-symptoms'>
                    <Symptoms 
                        title='throat' 
                        list1={closedList} 
                        list2={openedList} 
                    />
                </div>
                <div className='throat-guidance'>
                    <Guidance 
                        meditationTitle='DIVINE LIGHT MEDITATION'
                        arr={medArr}
                    />
                </div>
            </div>
        );
    }
}

export default Throat;