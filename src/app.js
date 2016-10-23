import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import Memories from './containers/Memories'
import Provider from './containers/Provider'
import memories from './reducers/memories'
import repos from './reducers/repos'
import thunk from 'redux-thunk'
// import middlewares from './middlewares'
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

const store = createStore(combineReducers({
  memories,
  repos
}), applyMiddleware(thunk));

// applyMiddleware(
//   store => next => action => {
//     console.log('applyMiddleware first: ', next, action);
//     return next(action);
//   },
//   store => next => action => {
//     console.log('applyMiddleware second: ', next, action);
//     return next(action);
//   },
// )

store.dispatch(actions.addMemories(memoriesList));

ReactDOM.render(
  <Provider store={store}>
    <Memories />
  </Provider>,
  document.getElementById('content')
)
