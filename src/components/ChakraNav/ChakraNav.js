import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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



class ChakraNav extends Component {
    render() {
        return (
            <div className="nav-container">
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='nav-title'>ChakraNav</h1>
                </Link>
                <Link to='/crown'>
                    <img id='purple' src={LotusCrown} alt='crown chakra'/>
                </Link>
                
                <Link to='/thirdeye'>
                    <img id='indigo' src={LotusEye} alt='third eye chakra'/>
                    {/*<ChakraImage image={thirdEyeImg}/>*/}
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
        );
    }
}

export default ChakraNav;