import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Test extends Component {
    render() {
        return (
            <div>
                <h1>Test Component</h1>

                <Link to="/">
                    <p>Back to landing page</p>
                </Link>

            </div>
        );
    }
}

export default Test;