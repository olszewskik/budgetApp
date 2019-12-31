import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import AppRouter from '../router/AppRouter';
import configureStore from '../store/configureStore';
import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill' }));
store.dispatch(addExpense({ description: 'gas bill' }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

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
