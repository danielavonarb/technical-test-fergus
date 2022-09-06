import request from 'superagent'

const rootUrl = '/api/v1'

export function getJobs() {
  return request.get(`${rootUrl}/jobs`).then((res) => {
    return res.body
  })
}

export function patchComment(updatedComment) {
  console.log('updatedComment from api:', updatedComment.id)
  return request
    .patch(`${rootUrl}/jobs/${updatedComment.id}`)
    .send(updatedComment)
}
