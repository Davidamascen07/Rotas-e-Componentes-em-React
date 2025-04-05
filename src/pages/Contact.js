import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const Contact = () => {
  return (
    <div className="page">
      <h1>Contato</h1>
      <p>Entre em contato conosco através dos seguintes canais:</p>
      <ul>
        <li>Email: contato@meuwebsite.com</li>
        <li>Telefone: (11) 1234-5678</li>
        <li>Endereço: Rua Exemplo, 123 - São Paulo/SP</li>
      </ul>
      <div className="page-links">
        <Link to="/" className="page-link">Página Inicial</Link>
        <Link to="/about" className="page-link">Sobre Nós</Link>
      </div>
    </div>
  );
};

export default Contact;
