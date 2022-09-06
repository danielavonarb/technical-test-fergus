import request from 'superagent'

const rootUrl = '/api/v1'

export function getJobs() {
  return request.get(`${rootUrl}/jobs`).then((res) => {
    return res.body
  })
}

export function patchComment(updatedJob) {
  return request.patch(`${rootUrl}/jobs/${updatedJob.id}`).send(updatedJob)
}
