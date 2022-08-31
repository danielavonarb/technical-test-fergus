import { SET_JOBS } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_JOBS:
      return payload
    default:
      return state
  }
}

export default reducer
