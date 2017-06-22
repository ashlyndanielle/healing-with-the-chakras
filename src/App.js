import React, { Component } from 'react';


import router from './router';
import ChakraNav from './components/ChakraNav/ChakraNav';

import './App.css';

// youtube api key below
// const API_KEY = 'AIzaSyCdSkX0LWzH2SYS3y9kdsblq1ylYYiTvsY';

class App extends Component {  
    render() {
        return (
            <div className='app-container'>
                <div className="app-nav">
                    <ChakraNav />
                </div>
                <div className="routes">
                    { router }
                </div>
            </div>
        );
    }
}

export default App;