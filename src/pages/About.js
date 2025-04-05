import React from 'react';
import { Link } from 'react-router-dom';
import './Pages.css';

const About = () => {
  return (
    <div className="page">
      <h1>Sobre Nós</h1>
      <p>Aqui você encontra informações sobre nossa empresa, história e valores.</p>
      <div className="page-links">
        <Link to="/" className="page-link">Página Inicial</Link>
        <Link to="/contact" className="page-link">Contato</Link>
      </div>
    </div>
  );
};

export default About;
