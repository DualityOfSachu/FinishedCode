import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewBook from './components/ViewBook'
import AddBook from './components/AddBook'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewBook/>}></Route>
        <Route path='/add' element={<AddBook/>}></Route>
      </Routes>
    </>
  )
}

export default App
