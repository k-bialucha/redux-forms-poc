import React from 'react';

class VerifyAction extends React.Component {
  componentDidMount() {
    console.warn('Doing some action!', this.props);
  }
  render() {
    return <div>ACTION</div>;
  }
}

export default VerifyAction;
