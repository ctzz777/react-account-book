import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { Input, Label, Form, TextArea, Button, Confirm, Dropdown } from 'semantic-ui-react';
import moment from 'moment';
import { fetchCategories, fetchCurrentAccount, updateAccount } from '../actions';
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

class DeleteConfirm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.show = this.show.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  show() {
    console.log('qq')
    this.setState({ open: true });
  }

  handleConfirm() {
    console.log('cqq')
    this.setState({ open: false });
  }

  handleCancel() {
    console.log('qqq')
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Confirm
          confirmButton="Delete"
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
        <Button type="button" onClick={this.show}>Show</Button>
      </div>
    )
  }
}

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
              <Button positive fluid type="submit" disabled={pristine||submitting}>Save</Button>
              <Button negative fluid type="button" onClick={reset} disabled={submitting}>Ｒecover</Button>
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

export default withRouter(connect(
  state => ({
    initialValues: {
      ...state.currentAccount,
      category: state.currentAccount.category ? state.currentAccount.category._id : null,
    }
  }),
)(reduxForm({
  form: 'EditAccount',
  validate,
  onSubmit: (values, dispatch) => dispatch(updateAccount(values)),
  onSubmitSuccess: (result, dispatch, props) => props.history.push('/'),
  enableReinitialize: true,
})(EditAccount)));