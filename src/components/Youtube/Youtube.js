import React from 'react';

const Youtube = (props) => {
    return <iframe width="600" height="315" src={props.youtubeLink} frameBorder="0" allowFullScreen></iframe>
};

export default Youtube;