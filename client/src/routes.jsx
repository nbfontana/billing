import React from 'react';
import {HashRouter, Route, Redirect, Switch} from 'react-router-dom';

import Dashboard from 'containers/dashboard/dashboard';
import BillingCycles from 'containers/billing-cycles/billing-cycle';

export default props => (
  <HashRouter>
    <Switch>
      <Route path='/dashboard' component={Dashboard}/>
      <Route path='/billing-cycles' component={BillingCycles}/>
      <Redirect from='*' to="/dashboard"/>
    </Switch>
  </HashRouter>
)
