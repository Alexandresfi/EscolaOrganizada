import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './Routes';
import { GlobalStyle } from './Components/global';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <BrowserRouter>
      <Rotas />
      <ToastContainer autoClose={4000} theme='colored' />
      <GlobalStyle />
    </BrowserRouter>

  );
}

export default App;
