import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { Form } from 'redux-form'

const CategoryList = ({ categories, input: { value, onChange }, label}) => {
  const options = categories.map(category => ({
    key: category._id,
    text: category.name,
    value: category._id,
    icon: category.icon,
  }));
  return (
    <Dropdown 
      selection
      value={value}
      onChange={(event, data) => onChange(data.value)}
      fluid
      placeholder={label}
      options={options}
    />
  );
};

export default CategoryList;