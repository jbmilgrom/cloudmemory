import React from 'react'
import ReactDOM from 'react-dom'
import Memories from './containers/Memories'
import Provider from './containers/Provider'

const memoriesList = [{
  name: 'hey',
  id: 1
}, {
  name: 'bob',
  id: 2
}, {
  name: 'sarita',
  id: 3
}]

ReactDOM.render(
  <Provider data={memoriesList}>
    <Memories />
  </Provider>,
  document.getElementById('content')
)
