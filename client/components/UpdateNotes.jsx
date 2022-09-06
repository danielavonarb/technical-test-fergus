import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'

import { editComment} from '../actions'


function UpdateJob () {
  const jobs = useSelector(state => state.jobs)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const {id} = useParams()
  const job = jobs.find((job) => id == job.id)

  const [updatedJob, setUpdatedJob] = useState(job)

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
    dispatch(editComment(updatedJob))
  }

  
  function handleClick() {
    navigate(-1)
  }
  
  return (
   
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">Edit Comment</label>
      <input id="comment" name="comment" value={updatedJob.comment} onChange={handleChange}/>
      <button onClick={handleClick}>Update</button>
    </form>    
  )
}

export default UpdateJob