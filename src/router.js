import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage/LandingPage';
import Crown from './components/Crown/Crown';
import ThirdEye from './components/ThirdEye/ThirdEye';
import Throat from './components/Throat/Throat';
import Heart from './components/Heart/Heart';
import SolarPlexus from './components/SolarPlexus/SolarPlexus';
import Sacral from './components/Sacral/Sacral';
import Root from './components/Root/Root';


export default (
    <Switch>
        <Route exact path='/' component={ LandingPage } />
        <Route path='/crown' component={ Crown } />
        <Route path='/thirdeye' component={ ThirdEye } />
        <Route path='/throat' component={ Throat } />
        <Route path='/heart' component={ Heart } />
        <Route path='/solarplexus' component={ SolarPlexus } />
        <Route path='/sacral' component={ Sacral } />
        <Route path='/root' component={ Root } />
    </Switch>
)