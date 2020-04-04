/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Logon from '../pages/Logon';
import NewIncident from '../pages/NewIncident';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/logon" component={Logon} />
      <Route path="/register" component={Register} />

      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/incidents/new" component={NewIncident} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
