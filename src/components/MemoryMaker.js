import React from 'react'

const MemoryMaker = React.createClass({
  getInitialState: function() {
    return {text: 'herro'};
  },
  onChange: function(e) {
    this.setState({text: e.target.value})
  },
  onSubmit: function(e) {
    e.preventDefault();
    this.props.addMemory({value: this.state.text});
    this.setState({text: ''})
  },
  render: function() {
    return (
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.text} onChange={this.onChange}/>
        <input type="submit" value="Save" />
      </form>
    )
  }
});

export default MemoryMaker
