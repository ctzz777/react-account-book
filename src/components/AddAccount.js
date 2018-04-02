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
    const { categories, handleSubmit, onSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Field
            name="category"
            label="category"
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

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    onSubmit: (values, qq, aa) => {
      console.log(values, qq, aa);
    },
  };
}

AddAccount = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddAccount);

export default reduxForm({
  form: 'AddAccount'
})(AddAccount);