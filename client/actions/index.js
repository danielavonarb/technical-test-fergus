import { getJobs, patchComment } from '../apis/jobs'

export const SET_JOBS = 'SET_JOBS'
export const SET_STATUS = 'SET_STATUS'
export const SET_STATUS_SELECTED = 'SET_STATUS_SELECTED'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function setJobs(jobs) {
  return {
    type: SET_JOBS,
    payload: jobs,
  }
}

export function setStatus(status) {
  return {
    type: SET_STATUS,
    payload: status,
  }
}

export function setStatusSelected(statusSelected) {
  return {
    type: SET_STATUS_SELECTED,
    payload: statusSelected,
  }
}

export function updateComment(updatedJob) {
  return {
    type: UPDATE_COMMENT,
    payload: updatedJob,
  }
}

export function fetchJobs() {
  return (dispatch) => {
    return getJobs().then((jobs) => {
      dispatch(setJobs(jobs))
      const statusArr = jobs.map((status) => {
        return status.status
      })
      dispatch(setStatus(statusArr))
      return null
    })
  }
}

export function editComment(updatedJob) {
  return (dispatch) => {
    return patchComment(updatedJob)
      .then(() => {
        dispatch(updateComment(updatedJob))
        return null
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
}
