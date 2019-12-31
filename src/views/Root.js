import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import AppRouter from '../router/AppRouter';
import configureStore from '../store';
import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';

import Info from '../playground/hoc';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(state);

function Root() {
  return (
    <>
      <Info info="There are the details" />
      <Router>
        <Header />
        <AppRouter />
      </Router>
    </>
  );
}

export default Root;
