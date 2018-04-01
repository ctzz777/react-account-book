import React, { Component } from 'react';
import { ToggleButtonGroup } from 'react-bootstrap';
import { ToggleButton } from 'react-bootstrap';
import { Dropdown } from 'semantic-ui-react'
import CategoryItem from './CategoryItem';

// const CategoryList = ({ categories, selectedCategory, handleSelectedCategoryChange }) => {
//   return (
//     <ToggleButtonGroup 
//       type="radio"
//       name="options"
//       value={selectedCategory}
//       onChange={handleSelectedCategoryChange}
//     >
//       {categories.map(category =>
//         // <CategoryItem
//         //   key={category._id}
//         //   category={category}
//         // />
//         <ToggleButton key={category._id} value={category._id}>
//           {category.name}
//         </ToggleButton>
//       )}
//     </ToggleButtonGroup>
//   );
// };

const CategoryList = ({ categories, selectedCategory, handleSelectedCategoryChange }) => {
  const options = categories.map(category => ({
    text: category.name,
    value: category._id,
  }));
  console.log(selectedCategory);
  return (
    <Dropdown 
      value={selectedCategory}
      onChange={handleSelectedCategoryChange}
      fluid
      selection
      placeholder='Select Category'
      options={options}
    />
  );
};

export default CategoryList;