import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './views/Home';
import AddCliente from './views/AddCliente';
import EditCliente from './views/EditCliente';
import ViewCliente from './views/ViewCliente';

import Principal from './pages/Principal';
import Pacotes from './pages/Pacotes';
import Promocoes from './pages/Promocoes';
import FaleConosco from './pages/FaleConosco';
import Destino from './pages/Destino';
import Cadastro from './pages/Cadastro';
import Footer from './components/Footer';


export default function Rotas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/pacotes" element={<Pacotes />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/cadastro" element={<Cadastro />} />

        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddCliente />} />
        <Route path="/edit/:id" element={<EditCliente />} />
        <Route path="/view/:id" element={<ViewCliente />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>

      <Footer/>

    </Router>
  )
}
