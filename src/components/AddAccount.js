import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { fetchCategories } from '../actions';
import CategoryList from './CategoryList';

class AddAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { categories, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            name="category"
            label="select category"
            component={CategoryList}
            categories={categories}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
}

AddAccount = connect(
  mapStateToProps,
)(AddAccount);

export default reduxForm({
  form: 'AddAccount',
  onSubmit: (value) => alert(JSON.stringify(value, null, 2))
})(AddAccount);