import * as React from 'react';
import { Route } from 'react-router';
import './assets/styles/custom.css'
import Home from './pages/Home/Home';

export default () => (
    <>
        <Route exact path='/' component={Home} />
        <Route exact path='/koozie?:id' component={Home} />
    </>
);
