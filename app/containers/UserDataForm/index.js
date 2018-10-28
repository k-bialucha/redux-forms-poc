/**
 *
 * UserDataForm
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Field, reduxForm } from 'redux-form/immutable'; // <--- immutable import
import { Route } from 'react-router-dom';

import injectSaga from 'utils/injectSaga';
// import injectReducer from 'utils/injectReducer';
import { makeSelectFormValues } from './selectors';
// import reducer from './reducer';
import saga from './saga';

import { sendDataForm } from './actions';
import VerifyAction from './LinkAction';

/* eslint-disable jsx-a11y/label-has-for */
const renderField = ({ input, label, type }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
    </div>
  </div>
);

renderField.propTypes = {
  input: PropTypes.node.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
};

const UserDataForm = props => {
  const { handleSubmit, pristine, reset } = props;
  return (
    <div>
      <Route path="/form/verify/:code/:email" component={VerifyAction} />
      <form onSubmit={handleSubmit}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field name="age" type="number" component={renderField} label="Age" />
        <div>
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
          <button type="button" disabled={pristine} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

UserDataForm.propTypes = {
  handleSubmit: PropTypes.func,
  reset: PropTypes.func,
  pristine: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  formValues: makeSelectFormValues(),
});

function mapDispatchToProps(dispatch) {
  return {
    handleSubmit: () => dispatch(sendDataForm()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

// const withReducer = injectReducer({ key: 'userData', reducer });
const withSaga = injectSaga({ key: 'userDataForm', saga });
const withReduxForm = reduxForm({ form: 'userData' });

export default compose(
  // withReducer,
  withSaga,
  withConnect,
  withReduxForm,
)(UserDataForm);
