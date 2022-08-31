import { SET_STATUS, SET_STATUS_SELECTED } from '../actions'

const initialState = { statusArray: [], statusSelected: 'All' }

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_STATUS:
      return { ...state, statusArray: payload }
    case SET_STATUS_SELECTED:
      return { ...state, statusSelected: payload }
    default:
      return state
  }
}

export default reducer
