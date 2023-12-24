import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Works from '../../pages/Works'

const Main = () => {
    return (
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='about'
          element={<About/>}
        />
        <Route
          path='works'
          element={<Works/>}
        />
      </Routes>
    )
  }
  
  export default Main