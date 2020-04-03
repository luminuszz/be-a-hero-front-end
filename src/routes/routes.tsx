/* eslint-disable import/no-unresolved */
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Logon from '../pages/Logon';
import NewIncident from '../pages/NewIncident';
import Profile from '../pages/Profile';
import Register from '../pages/Register';
import Route from './PrivateRoute';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/logon" component={Logon} />
      <Route exact path="/register" component={Register} />

      <Route exact path="/profile" component={Profile} isPrivate />
      <Route exact path="/incidents/new" component={NewIncident} isPrivate />
    </Switch>
  </BrowserRouter>
);

export default Routes;
