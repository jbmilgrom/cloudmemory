import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Memories from '../components/Memories'
import * as actions from '../actions'

/**
 * What connect()() does internally:
 *
 * const MemoriesConnected = React.createClass({
 *   componentDidMount: function() {
 *     const { store } = this.context;
 *     this.unsubscribe = store.subscribe(() => {
 *       this.forceUpdate();
 *     });
 *   },
 *   componentWillUnmount: function() {
 *     this.unsubscribe();
 *   },
 *   render: function() {
 *     const { store } = this.context;
 *     const state = store.getState();
 *     const boundActionCreators = bindActionCreators(actions, store.dispatch);
 *     return (
 *       <Memories {...boundActionCreators} memories={state.memories}/>
 *     )
 *   }
 * })
 *
 */

const mapStateToProps = (state) => ({memories: state.memories});
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const MemoriesConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(Memories);

MemoriesConnected.contextTypes = {
  store: React.PropTypes.object
};

module.exports = MemoriesConnected;
