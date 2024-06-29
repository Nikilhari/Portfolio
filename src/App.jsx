import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'
import About from './componets/About/About'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App