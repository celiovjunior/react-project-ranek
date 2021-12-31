import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Produtos from './components/Produtos/Produtos';
import Contato from './components/Contato/Contato';
import Produto from './components/Produto/Produto';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Produtos />}></Route>
          <Route path="produto/:id" element={<Produto />}></Route>
          <Route path="contato" element={<Contato />}></Route>
        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
