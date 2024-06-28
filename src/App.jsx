import React from 'react'
import Header from './componets/Header/Header'
import Home from './componets/Home/Home'

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
      </main>
    </>
  )
}

export default App