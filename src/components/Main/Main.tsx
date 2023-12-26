import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import About from '../../pages/About'
import Works from '../../pages/Works'
import Menu from '../../pages/Menu'
import Contacts from '../../pages/Contacts'

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
        <Route
          path='menu'
          element={<Menu/>}
        />
        <Route
          path='contacts'
          element={<Contacts/>}
        />

      </Routes>
    )
  }
  
  export default Main