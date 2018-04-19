import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router';
import { Form, Button } from 'semantic-ui-react';
import { login } from '../actions';

const InputField = ({input, label, meta: {touched, error}, ...custom}) => (
  <Form.Input
    fluid
    label={label}
    error={!!(touched&&error)}
    placeholder={label}
    {...input}
    {...custom}
  />
);

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <Form onSubmit={handleSubmit}>
        <div className="ui centered grid">
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Field
                name="username"
                label="Username"
                type="text"
                component={InputField}
              />
            </div>
          </div>
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Field
                name="password"
                label="Password"
                type="password"
                component={InputField}
              />
            </div>
          </div>
          <div className="stackable doubling three column row">
            <div className="six wide column">
              <Button positive type="submit" disabled={pristine||submitting}>Login</Button>
              <Button negative onClick={reset} disabled={pristine||submitting}>Clear</Button>
            </div>
          </div>
        </div>
      </Form>
    );
  }
};

Login = connect()(Login);

export default withRouter(reduxForm({
  form: 'Login',
  // validate,
  onSubmit: (values, dispatch) => dispatch(login(values)),
  onSubmitSuccess: (result, dispatch, props) => props.history.push('/'),
  enableReinitialize: true,
})(Login));