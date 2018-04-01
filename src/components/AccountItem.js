import React, { Component } from 'react';
import { List } from 'semantic-ui-react'

const AccountItem = ({ category, amount }) => {
  return (
    <List.Item>
      <List.Content floated="left">
        {category}
      </List.Content>
      <List.Content floated="right">
        ${amount}
      </List.Content>
    </List.Item>
  );
};

export default AccountItem;