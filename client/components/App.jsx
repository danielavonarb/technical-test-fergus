import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import JobDetails from './JobDetails'

function App () {
 
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<JobDetails/>} />
      </Routes>

    </>
  )
}

export default App
