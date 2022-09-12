import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { fetchJobs} from '../actions'
import FilterJobs from './FilterJobs'

function Home () {
  const jobs = useSelector(state => state.jobs) //hook to access redux store's state
  const statusSelected = useSelector(state => state.status.statusSelected)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs()) // The action object is sent to the store using the store's dispatch() method to let the store know something has happened.
  }, [])

  const filteredStatus = jobs.filter((job) => {
    return (statusSelected === 'All' || job.status === statusSelected)
  })


  return (
    <div className='container-job-listings'>
      < FilterJobs />
      {filteredStatus.map((job) => { // needs to be filtered based on the selected job status
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