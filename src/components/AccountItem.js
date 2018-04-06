import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const AccountItem = ({ category, amount, id }) => {
  return (
    <List.Item as={Link} to={`/editAccount/${id}`}>
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