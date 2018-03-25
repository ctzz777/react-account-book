import React, { Component } from 'react';
import { connect } from 'react-redux'
import { SingleDatePicker } from 'react-dates';
import moment from 'moment';
import { setDate, setFocused, prevDate, nextDate } from '../actions'
import { Button } from 'reactstrap';
import './datePicker.css';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };

    this.onFocusChange = this.onFocusChange.bind(this);
    this.onPrevDate = this.onPrevDate.bind(this);
    this.onNextDate = this.onNextDate.bind(this);
  }

  onFocusChange({ focused }) {
    this.setState({ focused });
  }

  onPrevDate(e) {
    const { date, onDateChange } = this.props;
    e.preventDefault();
    const newDate = date.clone().add(-1, 'day');
    onDateChange(newDate);
  }

  onNextDate(e) {
    const { date, onDateChange } = this.props;
    e.preventDefault();
    const newDate = date.clone().add(1, 'day');
    onDateChange(newDate);
  }

  render() {
    const { focused } = this.state;
    const { date, onDateChange } = this.props;

    return (
      <div>
        <a href="#" className="navi" onClick={this.onPrevDate}>&#8249;</a>
        <SingleDatePicker
          date={date} // momentPropTypes.momentObj or null
          onDateChange={onDateChange} // PropTypes.func.isRequired
          focused={focused} // PropTypes.bool
          onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
          numberOfMonths={1}
          displayFormat="YYYY/MM/DD"
          isOutsideRange={() => false}
          showDefaultInputIcon={true}
        />
        <a href="#" className="navi" onClick={this.onNextDate}>&#8250;</a>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    date: state.datePicker.date,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onDateChange: (date) => {
      dispatch(setDate(date));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DatePicker);