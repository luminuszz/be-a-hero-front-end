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
      <Route exact path="/logon" component={Logon} />
      <Route exact path="/register" component={Register} />

      <PrivateRoute exact path="/profile" component={Profile} />
      <PrivateRoute exact path="/incidents/new" component={NewIncident} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
