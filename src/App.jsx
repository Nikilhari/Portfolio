import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import About from './componets/About/About'
import Skills from './componets/Skills/Skills'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
      </main>
    </>
  )
}

export default App