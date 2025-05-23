import React from 'react'
import {  Routes , Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import UrlList from './components/UrlList.jsx'
import Stats from './components/Stats.jsx'
import './App.css'

const App = () => {
  return (
   
<div className="App">
        <Navbar />
        <div className='min-w-screen min-h-screen bg-gradient-to-br 
    from-gray-900 via-green-900 to-emerald-900 flex items-center justify-center relative  '>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/stats/:urlPath" element={<Stats />} />
            <Route path="/list" element={<UrlList />} />
          </Routes>
        </div>
      </div>


    

  )
}

export default App