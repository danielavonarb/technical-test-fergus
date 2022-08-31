import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchJobs} from '../actions'

function Home () {
  const jobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  return (
    <div className='container-job-listings'>
      {jobs.map((job) => {
        return (
          <div className='job-listing' key={job.id}>
            <h3 className='job-listing-title'>{job.description}</h3>
            <Link to={`/${job.id}`}>
              <button>Details</button>
            </Link>
          </div>
        )
      })}
    </div>
   
  )
}

export default Home