import React from 'react'
import { bindActionCreators } from 'redux'
import Memories from '../components/Memories'
import * as actions from '../actions'

const MemoriesContainer = React.createClass({
  componentDidMount: function() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  },
  componentWillUnmount: function() {
    this.unsubscribe();
  },
  render: function() {
    const { store } = this.context;
    const memories = store.getState();
    const boundActionCreators = bindActionCreators(actions, store.dispatch);
    return (
      <Memories {...boundActionCreators} memories={memories}/>
    )
  }
})

MemoriesContainer.contextTypes = {
  store: React.PropTypes.object
};

module.exports = MemoriesContainer;
