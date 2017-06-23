import React from 'react';

const Symptoms = (props) => {

    const balanced = props.list1.map( (listItem, i) => {
        return (
            <li key={i}>{listItem}</li>
        )
    })

    const unbalanced = props.list2.map( (listItem, i) => {
    return (
        <li key={i}>{listItem}</li>
    )
    })

    return (
        <section className='symptoms'>
            <div className='balanced'>
                <h1>CLOSED {props.title} CHAKRA</h1>
                <hr/>
                <ul>
                    {balanced}
                </ul>
            </div>

            <div className='unbalanced'>
                <h1>OPEN {props.title} CHAKRA</h1>
                <hr/>
                <ul>
                    {unbalanced}
                </ul>
            </div>
        </section>
    );
};

export default Symptoms;