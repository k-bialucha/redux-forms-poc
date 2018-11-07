import React from 'react';
import withRoute from 'utils/withRoute';

const About = () => (
  <div style={{ width: '80%', height: '500px', backgroundColor: 'orangered' }}>
    It is About static page!
  </div>
);

const ROUTE = '/about';

export default withRoute(About, ROUTE);
