import React from 'react';
import withRoute from 'utils/withRoute';

const Contact = () => (
  <div style={{ width: 100, height: '500px', backgroundColor: 'aquawhite' }}>
    It is a contact static page!
  </div>
);

const ROUTE = '/contact-us';

export default withRoute(Contact, ROUTE);
