import { getJobs } from '../apis/jobs'

export const SET_JOBS = 'SET_JOBS'
export const SET_STATUS = 'SET_STATUS'
export const SET_STATUS_SELECTED = 'SET_STATUS_SELECTED'

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
