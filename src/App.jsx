// import { useState } from 'react'
import './App.css'
import {Routes ,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/SkillsSection'
import ProjectsSection from './components/ProjectSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/projects' element={<ProjectsSection />} />
      <Route path='/contact' element={<ContactSection />} />
    </Routes>
    </>
  )
}