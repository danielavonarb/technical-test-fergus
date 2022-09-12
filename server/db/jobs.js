const connection = require('./connection')

function getJobs(db = connection) {
  return db('jobs').select()
}

function getJob(id, db = connection) {
  return db('jobs')
    .select(
      'id',
      'description',
      'contact_details as contactDetails',
      'created_at as createdAt',
      'status',
      'comment',
      'description'
    )
    .where('id', id)
    .first()
}

module.exports = {
  getJobs,
  getJob,
}
