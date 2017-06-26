import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import LotusCrown from '../../Images/Lotus-Line-Art-1.svg';
import LotusEye from '../../Images/Lotus-Line-Art-2.svg';
import LotusThroat from '../../Images/Lotus-Line-Art-3.svg';
import LotusHeart from '../../Images/Lotus-Line-Art-4.svg';
import LotusSolar from '../../Images/Lotus-Line-Art-5.svg';
import LotusSacral from '../../Images/Lotus-Line-Art-6.svg';
import LotusRoot from '../../Images/Lotus-Line-Art-7.svg';



class ChakraNav extends Component {
    render() {
        return (
            <div className="nav-container">
                <div className='chakras'>
                    <span>C</span><span>H</span><span>A</span><span>K</span><span>R</span><span>A</span><span>S</span>
                </div>
                <div className='chakra-links'>
                    <Link to='/crown'>
                        <img id='purple' src={LotusCrown} alt='crown chakra'/>
                    </Link>
                    
                    <Link to='/thirdeye'>
                        <img id='indigo' src={LotusEye} alt='third eye chakra'/>
                    </Link>
                    
                    <Link to='/throat'>
                        <img id='blue' src={LotusThroat} alt='third eye chakra'/>
                    </Link>
                    
                    <Link to='/heart'>
                        <img id='green' src={LotusHeart} alt='heart chakra'/>
                    </Link>
                    
                    <Link to='/solarplexus'>
                        <img id='yellow' src={LotusSolar} alt='solar plexus chakra'/>
                    </Link>
                    
                    <Link to='sacral'>
                        <img id='orange' src={LotusSacral} alt='sacral chakra'/>
                    </Link>
                    
                    <Link to='/root'>
                        <img id='red' src={LotusRoot} alt='root chakra'/>
                    </Link>
                </div>
                <div className='landing-link'>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <h1 className="seven-wheels">THE SEVEN WHEELS OF ENERGY</h1>
                    </Link>
                </div>
            </div>
        );
    }
}

export default ChakraNav;