import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    // <div className='app'>
    //   <Home />
    // </div>
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
