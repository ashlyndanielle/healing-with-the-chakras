import React, { Component } from 'react';

import $ from 'jquery';

import './LandingPage.scss';

class LandingPage extends Component {



    render() {

        $(document).ready(function(){

// root
            $('.root').hover(function(){
                $('#red').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#red').css('transform', 'scale(1)')
            })

// sacral
            $('.sacral').hover(function(){
                $('#orange').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#orange').css('transform', 'scale(1)')
            })

// solar
            $('.solar-plexus').hover(function(){
                $('#yellow').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#yellow').css('transform', 'scale(1)')
            })

// heart
            $('.heart').hover(function(){
                $('#green').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#green').css('transform', 'scale(1)')
            })

// throat
            $('.throat').hover(function(){
                $('#blue').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#blue').css('transform', 'scale(1)')
            })

// third-eye
            $('.third-eye').hover(function(){
                $('#indigo').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#indigo').css('transform', 'scale(1)')
            })

// crown
            $('.crown').hover(function(){
                $('#purple').css('transform', 'scale(1.1)')
            }
            , function(){
                $('#purple').css('transform', 'scale(1)')
            })
            
        });
        

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