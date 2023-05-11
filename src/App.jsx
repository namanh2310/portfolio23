import React from 'react'
import MyHeader from './components/Header/myheader'
import Home from './components/Home/home'
import About from './components/About/about'
import Portfolio from './components/Portfolio/portfolio'
import Services from './components/Services/services'
import Nav from './components/Nav/nav'
import Contact from './components/Contact/contact'
import Skills from './components/Skills/skills'



function App() {
  return (
    <div>
      <MyHeader />
      <Nav />
      <About />
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
    </div>
  )
}

export default App