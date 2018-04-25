import React, { Component } from 'react';
import { connect } from 'react-redux'
import moment from 'moment';
import AccountPage from './AccountPage';
import { fetchAccountBook } from '../actions'

class AccountBook extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, accountBook } = this.props;
    dispatch(fetchAccountBook());
  }

  render() {
    return (
      <div>
        <AccountPage />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    accountBook: state.accountBook,
  };
}

export default connect(
  mapStateToProps,
)(AccountBook);