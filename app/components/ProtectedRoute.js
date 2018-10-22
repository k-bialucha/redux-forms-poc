import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({
  component: Comp,
  redirectCondition,
  path,
  ...rest
}) => {
  return (
    <Route
      path={path}
      {...rest}
      render={props =>
        redirectCondition ? <Redirect to="/" /> : <Comp {...props} />
      }
    />
  );
};

ProtectedRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectCondition: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

export default ProtectedRoute;
