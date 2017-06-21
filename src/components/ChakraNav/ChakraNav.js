import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './ChakraNav.css'

// import crownImg from '../../Images/crown-chakra.png'
// import thirdEyeImg from '../../Images/third-eye-chakra.png'
// import throatImg from '../../Images/throat-chakra.png'
// import heartImg from '../../Images/heart-chakra.png'
// import solarPlexusImg from '../../Images/solar-plexus-chakra.png'
// import sacralImg from '../../Images/sacral-chakra.png'
// import rootImg from '../../Images/root-chakra.png'
import LotusCrown from '../../Images/Lotus-Line-Art-1.svg'
import LotusEye from '../../Images/Lotus-Line-Art-2.svg'
import LotusThroat from '../../Images/Lotus-Line-Art-3.svg'
import LotusHeart from '../../Images/Lotus-Line-Art-4.svg'
import LotusSolar from '../../Images/Lotus-Line-Art-5.svg'
import LotusSacral from '../../Images/Lotus-Line-Art-6.svg'
import LotusRoot from '../../Images/Lotus-Line-Art-7.svg'

import ChakraImage from './ChakraImage/ChakraImage';

class ChakraNav extends Component {
    render() {
        return (
            <div className="box">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='nav-title'>ChakraNav</h1>
                </Link>
                <Link to='/crown'>
                    <img id='purple' src={LotusCrown} alt='crown chakra'/>
                </Link>
                <p>Crown</p>
                <Link to='/thirdeye'>
                    <img id='indigo' src={LotusEye} alt='third eye chakra'/>
                    {/*<ChakraImage image={thirdEyeImg}/>*/}
                </Link>
                <p>Third Eye</p>
                <Link to='/throat'>
                    <img id='blue' src={LotusThroat} alt='third eye chakra'/>
                </Link>
                <p>Throat</p>
                <Link to='/heart'>
                    <img id='green' src={LotusHeart} alt='heart chakra'/>
                </Link>
                <p>Heart</p>
                <Link to='/solarplexus'>
                    <img id='yellow' src={LotusSolar} alt='solar plexus chakra'/>
                </Link>
                <p>Solar Plexus</p>
                <Link to='sacral'>
                    <img id='orange' src={LotusSacral} alt='sacral chakra'/>
                </Link>
                <p>Sacral</p>
                <Link to='/root'>
                    <img id='red' src={LotusRoot} alt='root chakra'/>
                </Link>
                <p>Root</p>
            </div>
        );
    }
}

export default ChakraNav;