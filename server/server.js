const express = require('express')
const path = require('path')

const jobsRoutes = require('./routes/jobs')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/jobs', jobsRoutes)

module.exports = server
