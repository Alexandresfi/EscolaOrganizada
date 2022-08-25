import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'

import { GlobalStyle } from './Components/global'
import { UserProvider } from './hooks/UserContext'
import { Rotas } from './routes/routes'

function App() {
  return (
    <>
      <UserProvider>
        <Rotas />
      </UserProvider>
      <ToastContainer autoClose={4000} theme="colored" />
      <GlobalStyle />
    </>
  )
}

export default App
