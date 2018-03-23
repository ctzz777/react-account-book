import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { setDate, setFocused, prevDate, nextDate } from '../actions'
import { Button } from 'reactstrap';
import './datePicker.css';

const DatePicker = (props) => {
  return (
    <div>
      <a href="#" class="navi" onClick={props.prevDate}>&#8249;</a>
      <SingleDatePicker
        date={props.date} // momentPropTypes.momentObj or null
        onDateChange={props.setDate} // PropTypes.func.isRequired
        focused={props.focused} // PropTypes.bool
        onFocusChange={props.setFocused} // PropTypes.func.isRequired
        numberOfMonths={1}
        displayFormat="YYYY/MM/DD"
        isOutsideRange={() => false}
        showDefaultInputIcon={true}
      />
      <a href="#" class="navi" onClick={props.nextDate}>&#8250;</a>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    date: state.datePicker.date,
    focused: state.datePicker.focused,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setDate: date => {
      dispatch(setDate(date));
    },
    setFocused: ({focused}) => {
      dispatch(setFocused(focused));
    },
    prevDate: () => {
      dispatch(prevDate());
    }, 
    nextDate: () => {
      dispatch(nextDate());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);