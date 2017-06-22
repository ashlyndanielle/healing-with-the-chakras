import React from 'react';

const ChakraTitle = (props) => {
    return (
        <div>
            <div className="line-div">
                <hr/>
            </div>
            <div className="line-div">
                <h1>{props.title}</h1>
            </div>
            <div className="line-div">
                <hr/>
            </div>
        </div>
    );
};

export default ChakraTitle;