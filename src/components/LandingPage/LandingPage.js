import React, { Component } from 'react';

import $ from 'jquery';

import './LandingPage.scss';

class LandingPage extends Component {



    render() {

        // jquery here
        // $(document).ready(function(){

        // });
        

        return (
            <div className='landing-container'>
                <section className='root chakra-box' onClick={() => this.props.history.push('/root')}>MULADHARA</section>
                <section className='sacral chakra-box' onClick={() => this.props.history.push('/sacral')}>SVADHISTHANA</section>
                <section className='solar-plexus chakra-box' onClick={() => this.props.history.push('/solarplexus')}>MANIPURA</section>
                <section className='heart chakra-box' onClick={() => this.props.history.push('/heart')}>ANAHATA</section>
                <section className='throat chakra-box' onClick={() => this.props.history.push('/throat')}>VISHUDDA</section>
                <section className='third-eye chakra-box' onClick={() => this.props.history.push('/thirdeye')}>ANJA</section>
                <section className='crown chakra-box' onClick={() => this.props.history.push('/crown')}>SAHASRARA</section>
            </div>
        );
    }
}

export default LandingPage;