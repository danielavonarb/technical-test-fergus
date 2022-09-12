import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'


function JobDetails () {
  const jobs = useSelector(state => state.jobs)
  
  const {id} = useParams()
  const job = jobs.find((job) => id == job.id)
  
  return (
    <div className='job-details-container'>
      <div className='job-details'>
        <p>Job-Description:{job.description}</p>
        <p>Contact-Details:{job.contact_details}</p>
        <p>Created at:{job.created_at}</p>
        <p>Status:{job.status}</p>
        <p>Comment:{job.comment}</p>
      </div>

      <Link to={`/${job.id}/edit`}>
        <button className='button'>Update notes</button>
      </Link>
      <Link to={'/'}>
        <button className='button'>Home</button>
      </Link>
  </div>
  )
}

export default JobDetails