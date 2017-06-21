import React, { Component } from 'react';


import router from './router';
import ChakraNav from './components/ChakraNav/ChakraNav';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='app-container'>
                <div className="routes">
                    { router }
                </div>
                <div className="app-nav">
                    <ChakraNav />
                </div>
            </div>
        );
    }
}

export default App;