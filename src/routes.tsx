/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Logon from './pages/Logon';
import Register from './pages/Register';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/logon" component={Logon} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
