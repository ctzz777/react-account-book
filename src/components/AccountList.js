import React, { Component } from 'react';
import { List, Segment } from 'semantic-ui-react'
import AccountItem from './AccountItem';

const AccountList = ({ accounts, loading }) => {
  return (
    <Segment loading={loading}>
      <List divided relaxed size="big">
        {accounts.map(account =>
          <AccountItem 
            key={account._id}
            category={account.category.name}
            amount={account.amount}
          />
        )}
      </List>
    </Segment>
  );
};

export default AccountList;