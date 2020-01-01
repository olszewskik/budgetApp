import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
//import 'react-dates/initialize';
//import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
//import 'react-dates/lib/css/_datepicker.css';
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from '../actions/filters';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  /*
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = ({ calendarFocused }) => {
    this.setState(() => ({ calendarFocused }));
  };
  */

  onStartDateChange = e => {
    if (!e.target.value) {
      this.props.dispatch(setStartDate(moment('1970-01-01')));
    } else {
      this.props.dispatch(setStartDate(moment(e.target.value)));
    }
  };

  onEndDateChange = e => {
    if (!e.target.value) {
      this.props.dispatch(setEndDate(moment('1970-01-01')));
    } else {
      this.props.dispatch(setEndDate(moment(e.target.value)));
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.filters.text}
          onChange={e => {
            this.props.dispatch(setTextFilter(e.target.value));
          }}
        />
        <select
          value={this.props.filters.sortBy}
          onChange={e => {
            if (e.target.value === 'date') {
              this.props.dispatch(sortByDate());
            } else if (e.target.value === 'amount') {
              this.props.dispatch(sortByAmount());
            }
          }}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <input
          type="date"
          value={moment(this.props.filters.startDate).format('YYYY-MM-DD')}
          onChange={this.onStartDateChange}
        />
        <input
          type="date"
          value={moment(this.props.filters.endDate).format('YYYY-MM-DD')}
          onChange={this.onEndDateChange}
        />
        {/*
        <DateRangePicker
          startDate={this.props.filters.startDate}
          startDateId="1"
          endDate={this.props.filters.endDate}
          endDateId="2"
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
