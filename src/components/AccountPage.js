import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import { Label } from 'semantic-ui-react'
import DatePicker from './DatePicker';
import AccountList from './AccountList';
import AddAccount from './AddAccount';
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
    const { date, accounts, loading, total, handleDateChange } = this.props;

    return (
      <div className="ui centered grid">
        <div className="stackable doubling three column row">
          <div className="six wide center aligned column">
            <DatePicker 
              date={date}
              onDateChange={handleDateChange}
            />
          </div>
        </div>
        <div className="stackable doubling three column row">
          <div className="six wide center aligned column">
            <Label circular icon="dollar" content={total} color="blue" size="massive" />
          </div>
        </div>
        <div className="stackable doubling three column row">
          <div className="six wide center aligned column">
            <AccountList 
              accounts={accounts}
              loading={loading}
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
    loading: state.loading,
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