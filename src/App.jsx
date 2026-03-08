import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import Header from './components/Header'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
