import React, { Component } from 'react';
import { ListGroup } from 'reactstrap';
import AccountItem from './AccountItem';
import './AccountList.css';

const AccountList = ({ accounts }) => {
  return (
    <ListGroup>
      {accounts.map(account =>
        <AccountItem
          key={account._id}
          category={account.category.name}
          amount={account.amount}
        />
      )}
    </ListGroup>
  );
};

export default AccountList;