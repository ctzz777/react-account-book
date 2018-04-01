import React, { Component } from 'react';
import { Button, List, Segment } from 'semantic-ui-react'
import AccountItem from './AccountItem';
import './AccountList.css';

const AccountList = ({ accounts }) => {
  return (
      <List celled size="big">
        {accounts.map(account =>
          <AccountItem 
            key={account._id}
            category={account.category.name}
            amount={account.amount}
          />
        )}
      </List>
  );
};

export default AccountList;