import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ChakraNav.css'

import crownImg from '../../Images/crown-chakra.png'
import thirdEyeImg from '../../Images/third-eye-chakra.png'
import throatImg from '../../Images/throat-chakra.png'
import heartImg from '../../Images/heart-chakra.png'
import solarPlexusImg from '../../Images/solar-plexus-chakra.png'
import sacralImg from '../../Images/sacral-chakra.png'
import rootImg from '../../Images/root-chakra.png'

import ChakraImage from './ChakraImage/ChakraImage';

class ChakraNav extends Component {
    render() {
        return (
            <div className="box">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='landing'>ChakraNav</h1>
                </Link>
                <Link to='/crown'>
                    <img src={crownImg} alt='crown chakra'/>
                    {/*<ChakraImage image={crownImg}/>*/}
                </Link>
                <Link to='/thirdeye'>
                    <img src={thirdEyeImg} alt='third eye chakra'/>
                    {/*<ChakraImage image={thirdEyeImg}/>*/}
                </Link>
                <Link to='/throat'>
                    <img src={throatImg} alt='third eye chakra'/>
                </Link>
                <Link to='/heart'>
                    <img src={heartImg} alt='heart chakra'/>
                </Link>
                <Link to='/solarplexus'>
                    <img src={solarPlexusImg} alt='solar plexus chakra'/>
                </Link>
                <Link to='sacral'>
                    <img src={sacralImg} alt='sacral chakra'/>
                </Link>
                <Link to='/root'>
                    <img src={rootImg} alt='root chakra'/>
                </Link>
            </div>
        );
    }
}

export default ChakraNav;