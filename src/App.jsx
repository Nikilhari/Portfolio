import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import About from './componets/About/About'
import Skills from './componets/Skills/Skills'
import Services from './componets/Services/Services'
import Projects from './componets/Projects/Projects'
import Certifications from './componets/Certifications/Certifications'
import Contact from './componets/Contact/Contact'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services/>
        <Projects/>
        <Certifications/>
        <Contact/>
      </main>
    </>
  )
}

export default App