import { combineReducers } from 'redux'

import jobs from './jobs'
import status from './status'

export default combineReducers({
  jobs,
  status,
})
