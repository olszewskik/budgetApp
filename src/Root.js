import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRouter from './router/AppRouter';

function Root() {
  return (
    <>
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </>
  );
}

export default Root;
