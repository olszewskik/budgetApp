import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';
import AppRouter from '../router/AppRouter';
import configureStore from '../store';
import { addExpense } from '../actions/expenses';
import getVisibleExpenses from '../selectors/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 4500, createdAt: 2000 }));
store.dispatch(addExpense({ description: 'gas bill', amount: 250, createdAt: 3000 }));
store.dispatch(addExpense({ description: 'rent', amount: 10950, createdAt: 1000 }));

//const state = store.getState();
//const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

//console.log(state);
//console.log(visibleExpenses);

function Root() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <AppRouter />
        </Router>
      </Provider>
    </>
  );
}

export default Root;
