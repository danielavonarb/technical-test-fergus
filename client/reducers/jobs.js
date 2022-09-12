import { SET_JOBS, UPDATE_COMMENT } from '../actions'

const initialState = []

const reducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_JOBS:
      return payload
    case UPDATE_COMMENT:
      return state.map((updatedComment) => {
        if (updatedComment.id === payload.id) {
          return { ...updatedComment, ...payload }
        }
        return updatedComment
      })
    default:
      return state
  }
}

export default reducer
