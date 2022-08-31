import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import { setStatusSelected } from '../actions'

function FilterJobs () {
  const jobs = useSelector(state => state.jobs)


  const tasteNotes = useSelector(state => state.tastenotes.tasteNotesArray)

  const coffees = useSelector(state => state.coffees)
  const dispatch = useDispatch()






  function handleSelectOnChange(e){

    dispatch(setTasteNotesSelected(e.target.value))  

  }

  
  

  


  return (
    <div className='drop-down'>
     <label htmlFor="status">Filter by Job status</label>
      <select id="status" name="status" onChange={handleSelectOnChange}>
      <option>All</option>{statusArr.map(status => <option key={status} value={status}>{status}</option>)}
      </select>
    </div>
  )
}

export default FilterJobs