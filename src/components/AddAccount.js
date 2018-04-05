import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Input, Label, Form, TextArea, Button, Dropdown } from 'semantic-ui-react';
import moment from 'moment';
import { fetchCategories } from '../actions';
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
    rows={3}
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
    <Form.Field>
      <label>{label}</label>
      <Dropdown
        selection
        value={value}
        onChange={(event, data) => onChange(data.value)}
        fluid
        error={!!(touched&&error)}
        placeholder={label}
        options={options}
      />
    </Form.Field>
  );
};

class AddAccount extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories());
  }

  render() {
    const { categories, handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <div className="ui grid">
          <div className="row">
            <div className="column">
              <Field
                name="date"
                label="Date"
                format={value => moment(value).format('YYYY/MM/DD')}
                normalize={(value, previousValue) => previousValue}
                component={DateField}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Field
                name="amount"
                type="number"
                label="Amount"
                normalize={value => isNaN(parseInt(value, 10)) ? null : parseInt(value, 10)}
                component={AmountField}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Field
                name="category"
                label="Category"
                component={CategorySelectorField}
                categories={categories}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Field
                name="description"
                label="Description"
                component={DescriptionField}
              />
            </div>
          </div>
          <div className="row">
            <div className="column">
              <Button positive type="submit" disabled={pristine||submitting}>Submit</Button>
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
  };
}

AddAccount = connect(
  mapStateToProps,
)(AddAccount);

export default connect(
  state => ({
    initialValues: {
      date: state.date.format('YYYYMMDD'),
      accountBookId: 'lf2.net',
    } // pull initial values from account reducer
  }),
)(reduxForm({
  form: 'AddAccount',
  validate,
  onSubmit: (value) => alert(JSON.stringify(value, null, 2)),
  enableReinitialize: true,
})(AddAccount));
