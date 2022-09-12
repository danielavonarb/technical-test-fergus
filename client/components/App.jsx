import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import JobDetails from './JobDetails'
import UpdateNotes from './UpdateNotes'

function App () {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<JobDetails/>} />
        <Route path='/:id/edit' element={<UpdateNotes />} />
      </Routes>
    </>
  )
}

export default App
