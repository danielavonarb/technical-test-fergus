const express = require('express')

const db = require('../db/jobs')

const router = express.Router()

router.get('/', (req, res) => {
  db.getJobs()
    .then((results) => {
      res.json(results)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  console.log('id from router.get:', id)
  db.getJob(id)
    .then((result) => {
      res.json(result)
      return null
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Somthing went wrong' })
    })
})

router.patch('/:id', (req, res) => {
  const updatedComment = req.body
  const id = req.params.id
  db.updateComment(id, updatedComment)
    .then(() => {
      return db.getJob(id)
    })
    .then((job) => res.json(job))
    .catch((err) => {
      console.error(err)
      res.status(500).send('something went wrong')
    })
})

module.exports = router
