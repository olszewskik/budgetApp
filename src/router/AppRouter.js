import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import Add from '../components/Add';
import Edit from '../components/Edit';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/add" component={Add} />
      <Route path="/edit" component={Edit} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRouter;
