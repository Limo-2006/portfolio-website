import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './component/home'
import About from './component/About'
import Contact from './component/Contact'
import Experience from './component/Experience'
import Project from './component/project'


const App = () => {
  return (

    <Routes>
<Route path='/' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/contact' element={<Contact />} />
<Route path='/experience' element={<Experience />} />
<Route path='/project' element={<Project />} />
<Route path='/contact' element ={<Contact />} />
 

    </Routes>
  )
}

export default App