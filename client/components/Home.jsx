import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchJobs} from '../actions'

function Home () {
  const jobs = useSelector(state => state.jobs)
  const statusSelected = useSelector(state => state.status.statusSelected)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  }, [])

  const filteredStatus = jobs.filter((job) => {
    return (statusSelected == 'All' || job.status === statusSelected)
  })


  return (
    <div className='container-job-listings'>
      {filteredStatus.map((job) => { // needs to be filtered based on the status
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