import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import DatePicker from './DatePicker';
import AccountList from './AccountList';
import { setDate, fetchAccounts } from '../actions'

class AccountPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, date } = this.props;
    dispatch(fetchAccounts(date));
  }

  render() {
    const { date, accounts, total, handleDateChange } = this.props;

    return (
      <div className="ui grid">
        <div className="row">
          <div className="column">
            <DatePicker 
              date={date}
              onDateChange={handleDateChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <h3>${total}</h3>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <AccountList 
              accounts={accounts}
            />
          </div>
        </div>
      </div>
    );
  }
};

const accountTotal = accounts => {
  return accounts.reduce((acc, account) => {
    return acc + account.amount;
  }, 0);
}

const mapStateToProps = state => {
  return {
    date: state.date,
    accounts: state.accounts,
    total: accountTotal(state.accounts),
  };
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    handleDateChange: date => {
      dispatch(setDate(date));
      dispatch(fetchAccounts(date));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPage);