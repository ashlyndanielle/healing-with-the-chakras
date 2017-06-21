import React, { Component } from 'react';


import router from './router';
import ChakraNav from './components/ChakraNav/ChakraNav';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <div className="routes">
                    { router }
                </div>
                <div className="nav">
                    <ChakraNav />
                </div>
            </div>
        );
    }
}

export default App;