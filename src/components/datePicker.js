import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { setDate, setFocused } from '../actions'

const DatePicker = (props) => {
    return (
      <div>
        <SingleDatePicker
          date={props.date} // momentPropTypes.momentObj or null
          onDateChange={props.setDate} // PropTypes.func.isRequired
          focused={props.focused} // PropTypes.bool
          onFocusChange={props.setFocused} // PropTypes.func.isRequired
          numberOfMonths={1}
          displayFormat="YYYY/MM/DD"
          isOutsideRange={() => false}
        />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);