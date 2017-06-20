import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Test from './components/Test'


export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/test' component={ Test } />
    </Switch>
)