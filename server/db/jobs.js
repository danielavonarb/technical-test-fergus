const connection = require('./connection')

function getJobs(db = connection) {
  return db('jobs').select()
}

function getJob(id, db = connection) {
  console.log('id from db getJob:', id)
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

function updateComment(id, updatedComment, db = connection) {
  console.log('id from db:', id)
  console.log('updatedComment from db:', updatedComment)
  return db('jobs').update(updatedComment).where({ id })
}

module.exports = {
  getJobs,
  getJob,
  updateComment,
}
