import React from 'react'

class Provider extends React.Component {
  getChildContext() {
    return {data: this.props.data};
  }

  render() {
    return this.props.children;
  }
}

Provider.childContextTypes = {
  data: React.PropTypes.array
};

export default Provider;
