import React from 'react'
import Navbar from './component/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Project from './component/Project/Project'

const App = () => {
  return (
    <div>
      <Navbar/>
  <Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='/Project' element={<Project/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Contact' element={<Contact/>}/>
  </Routes>
    </div>
  )
}

export default App
