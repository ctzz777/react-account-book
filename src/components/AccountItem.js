import React, { Component } from 'react';
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const AccountItem = ({ category, amount, id }) => {
  return (
    <List.Item as={Link} to={`/editAccount/${id}`}>
      <List.Content floated="right">
        ${amount}
      </List.Content>
      <List.Icon name={category.icon} color="blue" />
      <List.Content>
        {category.name}
      </List.Content>
    </List.Item>
  );
};

export default AccountItem;