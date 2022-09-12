//Reducers are JavaScript functions that accept the current state and an action and return the new state.
// The store needs to know what impact this action has on the state. This is the job of the reducer.
// The store passes the current state and the action to the reducer: reducer(state, action)

import { combineReducers } from 'redux'

import jobs from './jobs'
import status from './status'

export default combineReducers({
  jobs,
  status,
})
