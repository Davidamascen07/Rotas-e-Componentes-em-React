import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Home = () => {
  return (
    <div className="page">
      <h1>Página Inicial</h1>
      <p>Bem-vindo ao nosso website. Explore as diferentes seções usando os links abaixo.</p>
      <div className="page-links">
        <Link to="/about" className="page-link">Sobre Nós</Link>
        <Link to="/contact" className="page-link">Contato</Link>
      </div>
    </div>
  );
};

export default Home;
