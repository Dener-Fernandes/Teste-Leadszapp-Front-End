import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login/index';
import LoggedIn from './pages/LoggedIn/index';

function Routes() {
    return (
        <BrowserRouter>
            <Route component={Login} exact path="/"/>
            <Route component={LoggedIn} exact path="/loggedIn"/>
        </BrowserRouter>
    );
}

export default Routes;