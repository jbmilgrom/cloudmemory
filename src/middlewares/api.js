import { populateFromAPI } from '../actions'
import { POPULATE_FROM_API } from '../constants/ActionTypes'

const URL = 'https://api.github.com/users/jbmilgrom';

const api = store => next => action => {
  console.log('applyMiddleware: ', next, action);
  if (action.type !== POPULATE_FROM_API) {
    return next(action);
  }

}
