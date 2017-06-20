import React, { Component } from 'react';


import router from '../router';
import ChakraNav from './ChakraNav/ChakraNav';

class App extends Component {
    render() {
        return (
            <div>
                <ChakraNav />
                { router }
            </div>
        );
    }
}

export default App;