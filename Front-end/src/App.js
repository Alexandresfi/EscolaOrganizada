import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Rotas } from './Routes';
import { GlobalStyle } from './Components/global';

function App() {

  return (
    <BrowserRouter>
      <Rotas />
      <GlobalStyle />
    </BrowserRouter>

  );
}

export default App;
