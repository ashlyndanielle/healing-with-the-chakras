import React from 'react';

import ChakraTitle from './ChakraTitle'

const Guidance = (props) => {

    const medSteps = props.arr.map ( (steps, i) => {
        return (
            <div key={i}>{steps}</div>
        )
    } )

    return (
        <section className='guidance'>
            <div className='black'>
                <div className='guidance-title'>
                    <ChakraTitle title='BALANCING' />
                    <p>I am complete and one with the divine energy.  I am part of the Universal flow.  I am light.  I am love.</p>
                </div>

                <div className='meditation'>
                    <ChakraTitle title={props.meditationTitle} />
                    <div className='steps'>
                        {medSteps}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guidance;