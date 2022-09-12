import request from 'superagent' //client-side HTTP request library,

const rootUrl = '/api/v1'

export function getJobs() {
  return request.get(`${rootUrl}/jobs`).then((res) => {
    console.log(res.body)
    return res.body
  })
}
