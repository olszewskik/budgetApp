import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Help from "./components/Help";
import NotFound from "./components/NotFound";

function Root() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/add" component={Add} />
          <Route path="/edit" component={Edit} />
          <Route path="/help" component={Help} />
          <Route component={NotFound} />
        </Switch>
      </>
    </Router>
  );
}

export default Root;
