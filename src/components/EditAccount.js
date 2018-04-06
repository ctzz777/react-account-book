import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input, Label, Form, TextArea, Button, Dropdown } from 'semantic-ui-react';
import moment from 'moment';
import { fetchCategories, fetchCurrentAccount } from '../actions';
import CategoryList from './CategoryList';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'amount',
    'category',
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  });
  if (values.amount && !Number.isInteger(values.amount)) {
    console.log(Number.isInteger(values.amount))
    errors.amount = 'Invalid Amount';
  };
  return errors;
}

const DescriptionField = ({input, label, ...custom}) => (
  <Form.TextArea
    rows={4}
    autoHeight
    label={label}
    placeholder={label}
    {...input}
    {...custom}
  />
);

const AmountField = ({input, label, meta: {touched, error}, ...custom}) => (
  <Form.Input
    fluid
    label={label}
    icon="dollar"
    iconPosition='left'
    error={!!(touched&&error)}
    placeholder={label}
    {...input}
    {...custom}
  />
)

const DateField = ({input, label, ...custom}) => (
  <Form.Input
    fluid
    label={label}
    icon="calendar"
    iconPosition='left'
    placeholder={label}
    {...input}
    {...custom}
  />
)

const CategorySelectorField = ({ categories, input: { value, onChange }, meta: {touched, error}, label}) => {
  const options = categories.map(category => ({
    text: category.name,
    value: category._id,
    icon: category.icon,
  }));
  return (
    <Form.Dropdown
      selection
      value={value}
      label={label}
      onChange={(event, data) => onChange(data.value)}
      fluid
      error={!!(touched&&error)}
      placeholder={label}
      options={options}
    />
  );
};

class EditAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch, match } = this.props;
    const id = match.params.id;
    dispatch(fetchCategories());
    dispatch(fetchCurrentAccount(id));
  }

  render() {
    const { categories, loading, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit} loading={loading}>
        <div className="ui centered grid">
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Field
                name="date"
                label="Date"
                format={value => moment(value).format('YYYY/MM/DD')}
                normalize={(value, previousValue) => previousValue}
                component={DateField}
              />
            </div>
          </div>
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Field
                name="amount"
                type="number"
                label="Amount"
                normalize={value => isNaN(parseInt(value, 10)) ? null : parseInt(value, 10)}
                component={AmountField}
              />
            </div>
          </div>
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Field
                name="category"
                label="Category"
                component={CategorySelectorField}
                categories={categories}
              />
            </div>
          </div>
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Field
                name="description"
                label="Description"
                component={DescriptionField}
              />
            </div>
          </div>
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Button positive type="submit" disabled={pristine||submitting}>Save</Button>
              <Button negative onClick={reset} disabled={pristine||submitting}>Clear</Button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
};

const mapStateToProps = state => {
  return {
    categories: state.categories,
    loading: state.loading,
  };
}

EditAccount = connect(
  mapStateToProps,
)(EditAccount);

export default connect(
  state => ({
    initialValues: {
      ...state.currentAccount,
      category: state.currentAccount.category ? state.currentAccount.category._id : null,
    }
  }),
)(reduxForm({
  form: 'EditAccount',
  validate,
  onSubmit: (value) => alert(JSON.stringify(value, null, 2)),
  enableReinitialize: true,
})(EditAccount));