import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './Components/global'
import { Rotas } from './routes/routes'
import { AppProvider } from './hooks'

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
