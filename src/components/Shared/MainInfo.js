import React from 'react';

const MainInfo = (props) => {
    return (
        <div>
            <p className='main'>{props.main}</p>
            <img className='yoga' src={props.yoga} alt=''/>
        </div>
    );
};

export default MainInfo;