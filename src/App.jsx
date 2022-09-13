import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './Components/global'
import { AppProvider } from './hooks'
import { Rotas } from './routes/routes'

function App() {
  return (
    <>
      <AppProvider>
        <Rotas />
      </AppProvider>
      <ToastContainer autoClose={4000} theme="colored" />
      <GlobalStyle />
    </>
  )
}

export default App
