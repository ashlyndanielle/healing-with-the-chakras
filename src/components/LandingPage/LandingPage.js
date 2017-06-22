import React, { Component } from 'react';

import './LandingPage.scss';


class LandingPage extends Component {
    render() {
         
        return (
            <div className='landing-container'>
                <section className='root chakra-box'>MULADHARA</section>
                <section className='sacral chakra-box'>SVADHISTHANA</section>
                <section className='solar-plexus chakra-box'>MANIPURA</section>
                <section className='heart chakra-box'>ANAHATA</section>
                <section className='throat chakra-box'>VISHUDDA</section>
                <section className='third-eye chakra-box'>ANJA</section>
                <section className='crown chakra-box'>SAHASRARA</section>
            </div>
        );
    }
}

export default LandingPage;