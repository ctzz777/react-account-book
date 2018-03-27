import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';
import './AccountItem.css';

const AccountItem = ({ category, amount }) => {
  return (
    <ListGroupItem>
      <span className="category">{category}</span>
      <span className="amount">${amount}</span>
    </ListGroupItem>
  );
};

export default AccountItem;