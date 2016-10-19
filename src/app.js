import React from 'react'
import ReactDOM from 'react-dom'
import * as Redux from 'redux' // no default export
import Memories from './containers/Memories'
import Provider from './containers/Provider'
import memoriesReducer from './reducers/memories'
import * as actions from './actions'

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

const store = Redux.createStore(memoriesReducer);

store.dispatch(actions.addMemories(memoriesList));

ReactDOM.render(
  <Provider store={store}>
    <Memories />
  </Provider>,
  document.getElementById('content')
)
