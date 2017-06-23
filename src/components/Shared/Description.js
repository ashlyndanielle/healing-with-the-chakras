import React from 'react';

import ChakraTitle from './ChakraTitle';

const Description = (props) => {
    const descriptions = props.arr.map( (description, i) => {
        return (
            <div key={i}>{description}</div>
        )
    })
    return (
        <section className='description'>
            <h2>{props.title}</h2>
            <ChakraTitle title={props.subtitle}/>
            <div className='words'>
                { descriptions }      
            </div>
        </section> 
    );
};

export default Description;