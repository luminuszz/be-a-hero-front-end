/* eslint-disable import/no-unresolved */
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import NewIncident from './pages/NewIncident';
import Profile from './pages/Profile';
import Register from './pages/Register';

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/logon" component={Logon} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/incidents/new" component={NewIncident} />
    </Switch>
  </HashRouter>
);

export default Routes;
