import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setStatusSelected } from '../actions'

function FilterJobs () {
  const statusArr = useSelector(state => state.status.statusArray)

  const dispatch = useDispatch()

  function handleSelectOnChange(event){
    dispatch(setStatusSelected(event.target.value))  
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