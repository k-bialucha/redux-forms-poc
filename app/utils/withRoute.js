import React from 'react';
import { Route } from 'react-router-dom';

const withRoute = (WrappedComponent, route) => (
  <Route path={route} exact component={WrappedComponent} />
);

export default withRoute;
