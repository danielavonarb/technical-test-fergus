import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'

import { saveJob} from '../actions'


function UpdateJob () {
  const jobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {id} = useParams()
  const job = jobs.find((job) => id == job.id)

  const [updatedJob, setUpdatedJob] = useState(job.comment)


  function handleChange (event){
    const {name, value} = event.target
    const newJob = {
      ...updatedJob,
      [name]: value
    }
    setUpdatedJob(newJob)
  }

  function handleSubmit(event){
    event.preventDefault()
    dispatch(saveJob(updatedJob))
  }
  
  function handleClick() {
    navigate(-1)
  }
  


  return (
   
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Edit Comment
      <input id="comment" name="comment" value={updatedJob.comment} onChange={handleChange}/> </label>
      <button onClick={handleClick}>Update</button>
    </form>
    
  )
}

export default UpdateJob