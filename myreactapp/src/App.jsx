import { useState } from 'react'
import './App.css'
import Hero from './components/hero-section/Hero'
import About from './components/about-section/About'
import Services from './components/services-section/Services'
import Whyus from './components/whyus-section/Whyus'
import Contact from './components/contact-section/Contact'
import Footer from './components/footer-section/Footer'


function App() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Whyus></Whyus>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
