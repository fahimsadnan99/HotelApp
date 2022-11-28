import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Layouts/Navbar'


const App = () => {
  return (
    <>
    <Navbar></Navbar>
    <Outlet />
    </>
  )
}

export default App