import React, { Component } from 'react';

import LotusCrown from '../../Images/Lotus-Line-Art-1.svg';
import ChakraTitle from '../Shared/ChakraTitle';
import Description from '../Shared/Description';
import Symptoms from '../Shared/Symptoms';

class Crown extends Component {
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
                <div className='crown-gradient'>
                    <Description 
                        subtitle='sahasrara'
                        title='crown chakra'
                        arr={descriptionArray}
                    />
                </div>

                <div className='crown-symptoms'>
                    <Symptoms 
                        title='crown' 
                        list1={closedList} 
                        list2={openedList} 
                    />
                </div>
                {/*<section className='symptoms'>
                    <div className='balanced'>
                        <h1>CLOSED CROWN CHAKRA</h1>
                        <hr/>
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
                        <h1>OPEN CROWN CHAKRA</h1>
                        <hr/>
                        <ul>
                            <li>presence/mindfulness</li>
                            <li>unshakeable trust in our inner guidence</li>
                            <li>mystical oneness</li>
                            <li>peacefulness</li>
                            <li>clarity</li>
                            <li>access to universal consciousness</li>
                        </ul>
                    </div>
                </section>*/}
                
                <section className='guidance'>
                    <div className='black'>
                        <div className='guidance-title'>
                            <ChakraTitle title='BALANCING' />
                            <p>I am complete and one with the divine energy.  I am part of the Universal flow.  I am light.  I am love.</p>
                        </div>
                        {/*<div className='affirmation'>
                            <p>AFFIRMATION: I am complete and one with the divine energy.  I am part of the Universal flow.  I am light.  I am love.</p>
                        </div>*/}
                        <div className='meditation'>
                            <ChakraTitle title='DIVINE LIGHT MEDITATION' className='meditation-title' />
                            {/*<div className='steps'>
                                <div>1</div>
                                <div>2</div>
                                <div>3</div>
                                <div>4</div>
                                <div>5</div>
                            </div>*/}
                            <div className='steps'>
                                <div>Sit comfortably with your legs crossed and your back straight. Rest your hands in your lap, palms upward, with your left hand on top. This is the mudra for receiving energy. Close your eyes and let your breathing become slow and even.</div>
                                <div>Visualize a thousand-petalled lotus at the crown of your head. Imagine its petals gently opening to reveal an intense light. Let this divine light flow down into you through your crown chakra.  Repeat your crown chakra affirmation.</div>
                                <div>Feel the light spiraling down your body. Enjoy the warm glow as it saturates your entire being. Let every cell be permeated by light and inspiration, and every part of your consciousness become illuminated.</div>
                                <div>Focus your senses on the intensity of the light so that you not only see it, but hear, smell, taste, and touch it. Think of the light as a manifestation of your higher self, representing the peace that lies beyond understanding.</div>
                                <div>Feel a pure channel for the light: allow yourself to be at one with it. In this state of oneness, intuitive thoughts and inspirations may enter your consciousness. Be thankful for this guidance.  Take a breath and open your eyes.</div>
                            </div>
                        </div>
                    </div>
                </section>

   
                {/*<section className='yoga-video'>
                    <Youtube youtubeLink="https://www.youtube.com/embed/82mnPCsZzEQ"/>
                </section>*/}

            </div>
        );
    }
}

export default Crown;