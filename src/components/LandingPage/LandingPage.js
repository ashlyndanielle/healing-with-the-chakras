import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LandingPage.scss'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Landing Page</h1>

                <Link to="/test">
                    <p>Go to Test page</p>
                </Link>
            </div>
        );
    }
}

export default LandingPage;