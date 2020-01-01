import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
    <ExpenseListFilters />
    <ExpenseList />
  </>
);

export default Dashboard;
