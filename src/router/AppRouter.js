import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../views/Dashboard';
import Add from '../views/Add';
import Edit from '../views/Edit';
import Help from '../views/Help';
import NotFound from '../views/NotFound';

function AppRouter() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/add" component={Add} />
      <Route path="/edit/:id" component={Edit} />
      <Route path="/help" component={Help} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default AppRouter;
