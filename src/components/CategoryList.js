import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import { Form } from 'redux-form'

const CategoryList = ({ categories, input, label }) => {
  const options = categories.map(category => ({
    key: category._id,
    text: category.name,
    value: category._id,
    icon: category.icon,
  }));
  console.log(input.onChange);
  return (
    <Dropdown 
      selection
      {...input}
      value={input.value}
      onChange={(event, data) => input.onChange(data.value)}
      fluid
      placeholder={label}
      options={options}
    />
  );
};

// const CategoryList = ({ categories, selectedCategory, handleSelectedCategoryChange }) => {
//   const options = categories.map(category => ({
//     text: category.name,
//     value: category._id,
//     icon: category.icon,
//   }));
//   return (
//     <Dropdown 
//       value={selectedCategory}
//       onChange={handleSelectedCategoryChange}
//       fluid
//       selection
//       placeholder='Select Category'
//       options={options}
//     />
//   );
// };

export default CategoryList;