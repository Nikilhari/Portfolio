import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import About from './componets/About/About'
import Skills from './componets/Skills/Skills'
import Services from './componets/Services/Services'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services/>
      </main>
    </>
  )
}

export default App