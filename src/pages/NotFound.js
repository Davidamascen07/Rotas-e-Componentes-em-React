import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const NotFound = () => {
  return (
    <div className="page not-found">
      <h1>404 - Página Não Encontrada</h1>
      <p>A página que você está procurando não existe ou foi movida.</p>
      <div className="page-links">
        <Link to="/" className="page-link">Voltar para a Página Inicial</Link>
      </div>
    </div>
  );
};

export default NotFound;
