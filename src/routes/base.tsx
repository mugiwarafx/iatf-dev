import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Main, Footer } from '../layout/_all'
import Nav from '../components/Nav'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Nav />
      <Main view={<Outlet />} />
      <Footer />
    </div>
  )
}

export default App
